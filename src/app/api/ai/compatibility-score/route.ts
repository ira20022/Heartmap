'use server';

import { NextRequest, NextResponse } from 'next/server';
import { getChatCompletion } from '@/lib/ai/chatCompletion';

// OPENAI_API_KEY is configured in .env — replace with your actual key if needed
// OPENAI_API_KEY=your-openai-api-key-here

export async function POST(req: NextRequest) {
  try {
    const { userPersona, partnerPersona } = await req.json();

    if (!userPersona || !partnerPersona) {
      return NextResponse.json({ error: 'Both personas are required' }, { status: 400 });
    }

    const systemPrompt = `You are a relationship compatibility AI that analyzes two Love Personas and generates a detailed compatibility report.
Analyze the psychological dynamics between two personas and return structured JSON.
Return ONLY valid JSON, no markdown, no explanation.`;

    const userPrompt = `Analyze compatibility between these two Love Personas:

Person A: ${userPersona.name} (${userPersona.attachmentStyle})
Tagline: ${userPersona.tagline}
Archetype: ${userPersona.archetype}

Person B: ${partnerPersona.name} (${partnerPersona.attachmentStyle})
Tagline: ${partnerPersona.tagline}
Archetype: ${partnerPersona.archetype}

Return a JSON object with this exact structure:
{
  "overallScore": [number 20-95],
  "narrative": "[2-3 sentences describing the overall dynamic between these two personas]",
  "strengths": [
    { "id": "str-1", "title": "[strength title]", "description": "[1-2 sentences]" }
  ],
  "challenges": [
    { "id": "chal-1", "title": "[challenge title]", "description": "[1-2 sentences]" }
  ],
  "dimensionScores": [
    { "id": "dim-communication", "label": "Communication", "score": [number 20-95] },
    { "id": "dim-emotional", "label": "Emotional Fit", "score": [number 20-95] },
    { "id": "dim-values", "label": "Values Alignment", "score": [number 20-95] },
    { "id": "dim-growth", "label": "Growth Potential", "score": [number 20-95] },
    { "id": "dim-conflict", "label": "Conflict Resolution", "score": [number 20-95] }
  ],
  "relationshipDynamic": "[one evocative phrase describing the dynamic, e.g. 'The Anchor and the Wave']",
  "adviceForA": "[1-2 sentences of advice for Person A in this pairing]",
  "adviceForB": "[1-2 sentences of advice for Person B in this pairing]"
}
Include 3 strengths and 3 challenges.`;

    const response = await getChatCompletion(
      'OPEN_AI',
      'gpt-4.1-mini',
      [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      { max_completion_tokens: 1200 }
    );

    const content = response.choices[0]?.message?.content ?? '';
    const compatibility = JSON.parse(content);

    return NextResponse.json({ compatibility });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Compatibility analysis failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

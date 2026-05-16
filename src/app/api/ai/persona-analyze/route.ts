'use server';

import { NextRequest, NextResponse } from 'next/server';
import { getChatCompletion } from '@/lib/ai/chatCompletion';

// OPENAI_API_KEY is configured in .env — replace with your actual key if needed
// OPENAI_API_KEY=your-openai-api-key-here

export async function POST(req: NextRequest) {
  try {
    const { answers } = await req.json();

    if (!answers || typeof answers !== 'object') {
      return NextResponse.json({ error: 'Invalid answers payload' }, { status: 400 });
    }

    const answerSummary = Object.entries(answers)
      .map(([qId, optId]) => `Question ${qId}: Selected option ${optId}`)
      .join('\n');

    const systemPrompt = `You are a relationship psychology AI that analyzes behavioral patterns from quiz answers to generate a Love Persona profile. 
Analyze the provided quiz answers and return a structured JSON persona profile.
The persona should reflect attachment style, emotional patterns, and relationship tendencies.
Return ONLY valid JSON, no markdown, no explanation.`;

    const userPrompt = `Analyze these quiz answers and generate a Love Persona profile:

${answerSummary}

Return a JSON object with this exact structure:
{
  "id": "persona-[slug]",
  "name": "The [Persona Name]",
  "emoji": "[single emoji]",
  "tagline": "[one sentence tagline]",
  "archetype": "[archetype label]",
  "attachmentStyle": "Secure|Anxious|Avoidant|Disorganized",
  "confidenceScore": [number 60-95],
  "description": "[3 paragraphs separated by \\n\\n describing the persona deeply]",
  "signals": [
    { "id": "sig-1", "label": "[behavioral signal]", "positive": true|false|null }
  ],
  "traits": [
    { "id": "trait-1", "name": "[trait name]", "score": [number 40-95], "color": "var(--primary)" }
  ],
  "compatibilityTeaser": {
    "bestMatch": "[persona name]",
    "worstMatch": "[persona name]",
    "preview": "[one sentence teaser]"
  }
}
Include 5-6 signals and 6 traits. Use colors: var(--primary), var(--accent), #34D399, #60A5FA, #FBBF24, #F472B6 for traits.`;

    const response = await getChatCompletion(
      'OPEN_AI',
      'gpt-4.1-mini',
      [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      { max_completion_tokens: 1500 }
    );

    const content = response.choices[0]?.message?.content ?? '';
    const persona = JSON.parse(content);

    return NextResponse.json({ persona });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Analysis failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

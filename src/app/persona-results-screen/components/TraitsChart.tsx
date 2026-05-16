'use client';

import React from 'react';
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

interface Trait {
  id: string;
  name: string;
  score: number;
  color: string;
}

interface TraitsChartProps {
  traits: Trait[];
}

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { name: string; value: number; fill: string }[] }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-xl px-3 py-2 shadow-xl">
        <p className="text-xs font-semibold text-foreground">{payload[0].name}</p>
        <p className="text-lg font-bold font-tabular" style={{ color: payload[0].fill }}>
          {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export default function TraitsChart({ traits }: TraitsChartProps) {
  const data = traits.map((t) => ({
    name: t.name,
    value: t.score,
    fill: t.color,
  }));

  return (
    <ResponsiveContainer width="100%" height={240}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="20%"
        outerRadius="90%"
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <RadialBar
          dataKey="value"
          cornerRadius={4}
          background={{ fill: 'var(--muted)' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          iconSize={8}
          iconType="circle"
          formatter={(value) => (
            <span style={{ color: 'var(--muted-foreground)', fontSize: '11px' }}>{value}</span>
          )}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
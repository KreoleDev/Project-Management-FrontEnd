import { Progress } from '@igrp/igrp-framework-react-design-system';
import React from 'react';

interface ProjectProgressProps {
  label: string;
  value: number | string; // allow both
}

export function ProjectProgress({ label, value }: ProjectProgressProps) {
  // Make sure value is always a number
  const numericValue = Number(value) || 0;

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
        }}
      >
        <span style={{ fontSize: "0.8rem", fontWeight: 500 }}>{label}</span>
        <span style={{ fontSize: "0.8rem", fontWeight: 300 }}>
          {numericValue.toFixed(0)}%
        </span>
      </div>
      <Progress value={numericValue} />
    </div>
  );
}
import * as React from 'react';
import { Label } from '@igrp/igrp-framework-react-design-system/dist/components/primitives/label';
import { Slider } from '@igrp/igrp-framework-react-design-system/dist/components/primitives/slider';

type SliderProps = React.ComponentProps<typeof Slider>;

export function ProjectSlider({
  value: controlledValue,
  onValueChange,
  ...props
}: SliderProps) {
  const [internalValue, setInternalValue] = React.useState<number[]>(controlledValue ?? [0]);
  const value = controlledValue ?? internalValue;

  const handleValueChange = (newValue: number[]) => {
    if (onValueChange) onValueChange(newValue); 
    setInternalValue(newValue); 
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="completion_percentage">
        Progresso ({value[0]}%)
      </Label>
      <Slider
        id="completion_percentage"
        value={value}
        onValueChange={handleValueChange}
        max={100}
        step={1}
        className="w-full"
        {...props}
      />
    </div>
  );
}

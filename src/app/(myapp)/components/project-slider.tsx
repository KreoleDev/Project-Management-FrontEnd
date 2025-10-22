import { Label } from '@igrp/igrp-framework-react-design-system/dist/components/primitives/label';
import { Slider } from '@igrp/igrp-framework-react-design-system/dist/components/primitives/slider';

type SliderProps = React.ComponentProps<typeof Slider>;

export function ProjectSlider({ value, onValueChange, ...props }: SliderProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="completion_percentage">Progresso ({value}%)</Label>
      <Slider
        value={value}
        onValueChange={onValueChange}
        max={100}
        step={5}
        className="w-full"
        {...props}
      />
    </div>
  );
}

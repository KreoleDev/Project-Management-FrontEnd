import { Progress } from '@igrp/igrp-framework-react-design-system';
import React from 'react';

function ProjectProgress() {
  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return <Progress value={progress} />;
}

export { ProjectProgress };

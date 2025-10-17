'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { 
  IGRPStatsCard 
} from "@igrp/igrp-framework-react-design-system";

export default function Dashboardcard({ title, icon, body, percentage } : { title: string, icon: string, body: string, percentage: string }) {

  
  const [statstatsCard1Value, setStatstatsCard1Value] = useState<string | number>(0);
  
const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('component',)}    >
	<IGRPStatsCard
  name={ `statsCard1` }
  cardBorderPosition={ `top` }
cardBorder={ `rounded-xl` }
cardVariant={ `primary` }
iconBackground={ `none` }
titleSize={ `sm` }
valueSize={ `2xl` }
showIcon={ true }
iconName={ `Box` }
iconSize={ `md` }
iconVariant={ `primary` }
iconPlacement={ `end` }
itemPlacement={ `start` }
showIconBackground={ false }
showIconBorder={ false }
valueClassName={ undefined }
  onClick={ () => {} }
  value={ statstatsCard1Value }
title={ title }
iconName={ icon }
>
</IGRPStatsCard></div>
  );
}
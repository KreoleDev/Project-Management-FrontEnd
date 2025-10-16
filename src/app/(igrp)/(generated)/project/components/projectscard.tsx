'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { 
  IGRPText,
	IGRPIcon 
} from "@igrp/igrp-framework-react-design-system";

export default function Projectscard({ title, count } : { title: string, count: string }) {

  
  
  
const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('component',)}    >
	<div className={ cn('flex flex-row flex-nowrap items-center justify-between gap-2','pt-2 pr-2 pb-2 pl-2 px-2 py-2',' rounded-lg border',)}    >
	<div className={ cn()}    >
	<IGRPText
  name={ `text2` }
  variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ 3 }
  className={ cn() }
  
  
>
  { title }
</IGRPText>
<IGRPText
  name={ `text1` }
  variant={ `primary` }
weight={ `bold` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  className={ cn() }
  
  
>
  { count }
</IGRPText></div>
<IGRPIcon
  name={ `icon1` }
  iconName={ `ChartNoAxesCombined` }
size={ `28` }
  className={ cn() }
  
  
>
</IGRPIcon></div></div>
  );
}
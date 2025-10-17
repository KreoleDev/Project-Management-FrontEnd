'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { 
  IGRPIcon,
	IGRPText 
} from "@igrp/igrp-framework-react-design-system";

export default function Detailcard({ icon, title, count } : { icon: string, title: string, count: string }) {

  
  
  
const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('component',)}    >
	<div className={ cn('section',' space-y-6',)}    >
	<div className={ cn('flex','flex flex-row flex-nowrap items-center justify-start gap-2',)}    >
	<IGRPIcon
  name={ `icon1` }
  size={ `34` }
  className={ cn() }
  
  iconName={ icon }
>
</IGRPIcon>
<div className={ cn(' mt-5',)}    >
	<IGRPText
  name={ `text2` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  { title }
</IGRPText>
<IGRPText
  name={ `text1` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  className={ cn() }
  
  
>
  { count }
</IGRPText></div></div></div></div>
  );
}
'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import {MapLocations} from '@/app/(myapp)/components/MapLocations'
import { 
  IGRPPageHeader,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";
import { useRouter } from 'next/navigation';


export default function PageMaplocationsComponent() {


  
  
  
const { igrpToast } = useIGRPToast()

function handleLocationClick (location: any): void  | undefined {

  router.push(`/project/${location.id}`);

}

 const router = useRouter()


  return (
<div className={ cn('page','space-y-6',)}    >
	<IGRPPageHeader
  name={ `Mapa` }
  title={ `Mapa dos projetos` }
  iconBackButton={ `ArrowLeft` }
  variant={ `h3` }
  className={ cn() }
  
>
  <div className="flex items-center gap-2">
    <IGRPButton
  name={ `button1` }
  variant={ `default` }
size={ `default` }
showIcon={ true }
iconName={ `MapPinPlus` }
  className={ cn() }
  onClick={ () => {} }
  
>
  Novo Projecto
</IGRPButton>
</div>
</IGRPPageHeader>

<div className={ cn('section',' space-y-6',)}    >
	<MapLocations   onLocationClick={ handleLocationClick } ></MapLocations></div></div>
  );
}

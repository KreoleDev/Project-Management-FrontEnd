'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { 
  IGRPText,
	IGRPCheckbox 
} from "@igrp/igrp-framework-react-design-system";

export default function Developmentindicator({ completionPercentage, startedAt, completedAt, createdAt, projectElaboration, projectApproval, licensing } : { completionPercentage: number, startedAt: string, completedAt: string, createdAt: string, projectElaboration: boolean, projectApproval: boolean, licensing: string }) {

  
  
  
const { igrpToast } = useIGRPToast()

useEffect(() => {
  
},[])


  return (
<div className={ cn('component',)}    >
	<div className={ cn('section',' space-y-6',)}    >
	<div className={ cn('border border-solid border-[#C4C4C4]',' rounded-lg border p-4 my-3',)}    >
	<IGRPText
  name={ `text1` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  className={ cn() }
  
  
>
  Indicadores de Desenvolvimento
</IGRPText>
<div className={ cn('grid','grid-cols-1 ','xs:grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4',)}    >
	<IGRPCheckbox
  name={ `devIndicator1` }
  label={ `Elaboração de Projetos de Especialidade` }
disabled={ true }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `devIndicator2` }
  label={ `Aprovação de projetos` }
disabled={ true }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `devIndicator3` }
  label={ `Licenciamentos de obras` }
disabled={ true }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox></div></div></div></div>
  );
}
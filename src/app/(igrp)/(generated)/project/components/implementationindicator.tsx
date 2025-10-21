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

export default function Implementationindicator({ constructionProgress, equipmentInstallation, inspectionAndLicensing, sector } : { constructionProgress: string, equipmentInstallation: string, inspectionAndLicensing: string, sector: string }) {

  
  
  
const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('component',)}    >
	<div className={ cn('section',' space-y-6',)}    >
	<div className={ cn(' rounded-lg border p-4 my-3',)}    >
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
  Indicadores de Implimentação
</IGRPText>
<div className={ cn('grid','grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4',)}    >
	{ sector !== "Serviços" && (<div className={ cn('flex',)}    >
	<IGRPText
  name={ `text2` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn('','mr-1',) }
  
  
>
  Em Obra:
</IGRPText>
<IGRPText
  name={ `text3` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  1-30%
</IGRPText></div>)}
<IGRPCheckbox
  name={ `checkbox2` }
  label={ `Instalação de Equipamentos` }
disabled={ true }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `checkbox1` }
  label={ `Vistoria e Licenciamento` }
disabled={ true }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox></div></div></div></div>
  );
}
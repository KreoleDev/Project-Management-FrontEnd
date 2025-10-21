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

export default function Financingindicator({ fundingDecision, bankNegotiation, creditContracting } : { fundingDecision: boolean, bankNegotiation: boolean, creditContracting: boolean }) {

  
  
  
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
  Indicadores de Financiamento
</IGRPText>
<div className={ cn('grid','grid-cols-1 ','xs:grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4',)}    >
	<IGRPCheckbox
  name={ `checkbox1` }
  label={ `Aguarda decisão de financiamento` }
disabled={ true }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `checkbox3` }
  label={ `Em negociação com o banco` }
disabled={ true }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `checkbox2` }
  label={ `Fase final da contratação do crédito` }
disabled={ true }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox></div></div></div></div>
  );
}
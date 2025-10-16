'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import FormProject from '@/app/(igrp)/(generated)/project/components/formproject'
import { 
  IGRPPageHeader,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";


export default function PageNewprojectComponent() {


  
  
  
const [isSubmitting, setIsSubmitting] = useState<boolean>(undefined);

const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Novo Projeto` }
  iconBackButton={ `ArrowLeft` }
  showBackButton={ true }
  urlBackButton={ `/project` }
  variant={ `h3` }
  
>
  <div className="flex items-center gap-2">
    <IGRPButton
  name={ `button1` }
  variant={ `default` }
size={ `default` }
showIcon={ true }
iconName={ `Save` }
  className={ cn() }
  onClick={ ()=> {setIsSubmitting(!isSubmitting)} }
  
>
  Salvar
</IGRPButton>
</div>
</IGRPPageHeader>

<FormProject  isSubmitting={ isSubmitting }  onAfterSubmit={ ()=> {setIsSubmitting(!isSubmitting)} } ></FormProject></div></div>
  );
}

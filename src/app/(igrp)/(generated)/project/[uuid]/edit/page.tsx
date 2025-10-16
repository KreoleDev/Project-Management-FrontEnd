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
import {useDetailProject} from '@/app/(myapp)/hooks/project'


export default function PageEditprojectComponent({ params } : { params: Promise<{ uuid: string }> } ) {

  const { uuid } = use(params);

  
  
  
const [isSubmitting, setIsSubmitting] = useState<boolean>(undefined);

const { igrpToast } = useIGRPToast()


const {data} = useDetailProject(uuid);

console.log("data", data)




  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Editar Projeto` }
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
  onClick={ () => {setIsSubmitting(!isSubmitting)
} }
  
>
  Salvar
</IGRPButton>
</div>
</IGRPPageHeader>

<FormProject  initialData={ data } isSubmitting={ isSubmitting }  onAfterSubmit={ () => {setIsSubmitting(!isSubmitting)
} } ></FormProject></div></div>
  );
}

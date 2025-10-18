'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPFormHandle } from "@igrp/igrp-framework-react-design-system";
import { z } from "zod"
import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";
import { 
  IGRPModalDialog,
	IGRPModalDialogContent,
	IGRPModalDialogHeader,
	IGRPModalDialogTitle,
	IGRPModalDialogDescription,
	IGRPForm,
	IGRPCombobox,
	IGRPModalDialogFooter,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";
import {useProjectConfiguration} from '@/app/(myapp)/hooks/project'

export default function Statuschange({ openModal, initialData, setOpen } : { openModal: boolean, initialData: any, setOpen: () => void }) {

  
  const form1 = z.object({
    status: z.string().nonempty()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    status: ``
}


  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [selectstatusOptions, setSelectstatusOptions] = useState<IGRPOptionsProps[]>([]);
  
const { igrpToast } = useIGRPToast()

const {projectStatusOptions} = useProjectConfiguration();

useEffect(() => {
  setSelectstatusOptions(projectStatusOptions || [])

  if (initialData)
   setForm1Data(initialData)
}, [initialData])



  return (
<div className={ cn('component',)}    >
	<IGRPModalDialog
  onOpenChange={ setOpen }
  open={ openModal }
>
  <IGRPModalDialogContent
  size={ `md` }
  className={ cn() }
  
  
>
  <IGRPModalDialogHeader
  
  
>
  <IGRPModalDialogTitle
  name={ `modalDialogTitle1` }
  
  className={ cn() }
  
  
>
  Alterar Status do Projeto
</IGRPModalDialogTitle>
  <IGRPModalDialogDescription
  name={ `modalDialogDescription1` }
  
  className={ cn() }
  
  
>
</IGRPModalDialogDescription>
</IGRPModalDialogHeader>
  <     >
	<IGRPForm
  schema={ form1 }
  validationMode={ `onBlur` }
formRef={ formform1Ref }
  onSubmit={ (e) => {} }
  defaultValues={ form1Data }
>
  <>
  <IGRPCombobox
  name={ `status` }
  label={ `Status` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  onChange={ () => {} }
  options={ selectstatusOptions }
>
</IGRPCombobox>
</>
</IGRPForm></>
  <IGRPModalDialogFooter
  className={ cn('','block',) }
  
  
>
  <div className={ cn('flex','flex flex-row flex-nowrap items-center justify-end gap-2',)}    >
	<IGRPButton
  name={ `button1` }
  variant={ `default` }
size={ `default` }
showIcon={ true }
iconName={ `Save` }
  className={ cn() }
  onClick={ () => {} }
  
>
  Salvar
</IGRPButton></div>
</IGRPModalDialogFooter>
</IGRPModalDialogContent>
</IGRPModalDialog></div>
  );
}
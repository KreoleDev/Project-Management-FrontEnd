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
	IGRPForm,
	IGRPInputText,
	IGRPTextarea,
	IGRPCombobox,
	IGRPDatePicker,
	IGRPModalDialogFooter,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";
import {useProjectConfiguration} from '@/app/(myapp)/hooks/project'

export default function Situationcard({ open, setOpen, initialData } : { open: boolean, setOpen: () => void, initialData: any }) {

  
  const form1 = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    status: z.string().optional(),
    createdAt: z.string().optional()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    title: undefined,
    description: undefined,
    status: undefined,
    createdAt: undefined
}


  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [selectstatusOptions, setSelectstatusOptions] = useState<IGRPOptionsProps[]>([]);
  
const { igrpToast } = useIGRPToast()


const {situationStatusOptions} = useProjectConfiguration();

useEffect(() => {
  setSelectstatusOptions(situationStatusOptions || [])

  if(initialData !== undefined){
    setForm1Data(initialData)

  }
},[initialData])


  return (
<div className={ cn('component',)}    >
	<div className={ cn('section',' space-y-6',)}    >
	<IGRPModalDialog
  onOpenChange={ setOpen }
  open={ open }
>
  <IGRPModalDialogContent
  size={ `lg` }
  className={ cn() }
  
  
>
  <IGRPModalDialogHeader
  className={ cn('',) }
  
  
>
  <IGRPModalDialogTitle
  name={ `modalDialogTitle1` }
  
  className={ cn() }
  
  
>
  Ponto de Situação
</IGRPModalDialogTitle>
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
  <div className={ cn('grid','grid-cols-1 ','xs:grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4',)}    >
	<IGRPInputText
  name={ `title` }
  label={ `Título` }
showIcon={ false }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPTextarea
  name={ `description` }
  label={ `Descrição` }
rows={ 3 }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPTextarea>
<IGRPCombobox
  name={ `status` }
  label={ `Status` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ undefined }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectstatusOptions }
>
</IGRPCombobox>
<IGRPDatePicker
  placeholder={ `Please select a date...` }
  name={ `createdAt` }
  id={ `createdAt` }
  label={ `Data` }
  startDate={ new Date(`1900-01-01`) }
  endDate={ new Date(`2099-12-31`) }
  gridSize={ `full` }
  dateFormat={ `dd/MM/yyyy` }
  today={ new Date(`2025-01-01`) }
  defaultMonth={ new Date(`2025-01-01`) }
  startMonth={ new Date(`2025-01-01`) }
  month={ new Date(`2025-01-01`) }
  endMonth={ new Date(`2025-12-31`) }
  numberOfMonths={ 1 }
  captionLayout={ `label` }
  className={ cn('col-span-1',) }
  
/></div>
</>
</IGRPForm></>
  <IGRPModalDialogFooter
  className={ cn('','','block',) }
  
  
>
  <div className={ cn('flex','flex flex-row flex-nowrap items-stretch justify-end gap-2',)}    >
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
</IGRPModalDialog></div></div>
  );
}
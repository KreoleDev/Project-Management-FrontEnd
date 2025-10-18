'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPFormHandle } from "@igrp/igrp-framework-react-design-system";
import { z } from "zod"
import { 
  IGRPModalDialog,
	IGRPModalDialogContent,
	IGRPModalDialogHeader,
	IGRPModalDialogTitle,
	IGRPForm,
	IGRPTabs,
	IGRPTabItem,
	IGRPInputText,
	IGRPInputNumber,
	IGRPTextarea,
	IGRPText,
	IGRPCheckbox,
	IGRPModalDialogFooter,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";

export default function Phasecard({ openModal, initialData, setOpen } : { openModal: boolean, initialData: any, setOpen: () => void }) {

  
  const form1 = z.object({
    phaseName: z.string().optional(),
    phaseOrder: z.number().optional(),
    completionPercentage: z.number().optional(),
    requirements: z.string().optional(),
    checkbox4: z.string().optional(),
    checkbox1: z.string().optional(),
    checkbox3: z.string().optional()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    phaseName: undefined,
    phaseOrder: undefined,
    completionPercentage: undefined,
    requirements: undefined,
    checkbox4: undefined,
    checkbox1: undefined,
    checkbox3: undefined
}


  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [tabstabs1Items, setTabstabs1Items] = useState<IGRPTabItem[]>([]);
  
const { igrpToast } = useIGRPToast()

useEffect(() => {
  setForm1Data(initialData)

},[initialData])


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
  
  
  
>
  Fase do Projeto
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
  <IGRPTabs
  variant={ `default` }
  iconPlacement={ `start` }
  tabListClassName={ cn('w-full',) }
  items={
    [
        {
          value: `tabsItem1-jXjM`,
          label: `Informações Básicas`,
          icon: `ArrowRight`,
content: (<>
            <div className={ cn('grid','grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4',)}    >
	<IGRPInputText
  name={ `phaseName` }
  label={ `Nome da Fase` }
showIcon={ false }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPInputNumber
  name={ `phaseOrder` }
  label={ `Ordem da Fase` }
max={ 9999999 }
step={ 1 }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputNumber>
<IGRPInputNumber
  name={ `completionPercentage` }
  label={ `Percentagem Concluido` }
max={ 9999999 }
step={ 1 }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputNumber>
<IGRPTextarea
  name={ `requirements` }
  label={ `Requisitos` }
rows={ 3 }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPTextarea></div>
</>),
        },
        {
          value: `tabsItem2-phEc`,
          label: `Indicadores Detalhados`,
          icon: `ArrowRight`,
content: (<>
            <div className={ cn('grid','grid-cols-1 ','xs:grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4',)}    >
	<IGRPText
  name={ `text1` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `none` }
maxLines={ 3 }
  className={ cn('col-span-1',) }
  
  
>
  Indicadores de Desenvolvimento
</IGRPText>
<div className={ cn()}    >
	<IGRPCheckbox
  name={ `checkbox4` }
  label={ `Elaboração do projeto concluida` }
  className={ cn('','mt-2 mb-2 my-2',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `checkbox1` }
  label={ `Aprovação do projeto` }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `checkbox3` }
  label={ `Licenciamento` }
  className={ cn('','mt-2 mb-2 my-2',) }
  
  
>
</IGRPCheckbox></div></div>
</>),
        },
]
  }
/>
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
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
	IGRPTabs,
	IGRPTabItem,
	IGRPCombobox,
	IGRPInputNumber,
	IGRPTextarea,
	IGRPText,
	IGRPCheckbox,
	IGRPModalDialogFooter,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";
import {useProjectConfiguration} from '@/app/(myapp)/hooks/project'

export default function Phasecard({ openModal, initialData, setOpen, sector } : { openModal: boolean, initialData: any, setOpen: () => void, sector: string }) {

  
  const form1 = z.object({
    phaseName: z.string().optional(),
    phaseOrder: z.number().optional(),
    completionPercentage: z.number().optional(),
    requirements: z.string().optional(),
    checkbox1: z.string().optional(),
    checkbox3: z.string().optional(),
    checkbox2: z.string().optional(),
    checkbox5: z.string().optional(),
    checkbox4: z.string().optional(),
    checkbox6: z.string().optional(),
    inWork: z.string().optional(),
    checkbox7: z.string().optional(),
    checkbox8: z.string().optional(),
    inputNumber4: z.string().optional(),
    inputNumber3: z.string().optional(),
    inputNumber2: z.string().optional(),
    inputNumber1: z.string().optional(),
    reinvestPlan: z.string().optional(),
    inputTextarea1: z.string().optional(),
    sector: z.string().optional(),
    island: z.string().optional(),
    term: z.string().optional()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    phaseName: undefined,
    phaseOrder: undefined,
    completionPercentage: undefined,
    requirements: undefined,
    checkbox1: undefined,
    checkbox3: undefined,
    checkbox2: undefined,
    checkbox5: undefined,
    checkbox4: undefined,
    checkbox6: undefined,
    inWork: undefined,
    checkbox7: undefined,
    checkbox8: undefined,
    inputNumber4: undefined,
    inputNumber3: undefined,
    inputNumber2: undefined,
    inputNumber1: undefined,
    reinvestPlan: undefined,
    inputTextarea1: undefined,
    sector: undefined,
    island: undefined,
    term: undefined
}


  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [tabstabs1Items, setTabstabs1Items] = useState<IGRPTabItem[]>([]);
  const [selectphaseNameOptions, setSelectphaseNameOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectinWorkOptions, setSelectinWorkOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectreinvestPlanOptions, setSelectreinvestPlanOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectsectorOptions, setSelectsectorOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectislandOptions, setSelectislandOptions] = useState<IGRPOptionsProps[]>([]);
  const [selecttermOptions, setSelecttermOptions] = useState<IGRPOptionsProps[]>([]);
  
const [currentPhaseName, setCurrentPhaseName] = useState<string>(undefined);

const [currentReinVestPlan, setCurrentReinVestPlan] = useState<string>(undefined);

const { igrpToast } = useIGRPToast()

const {phaseNameOptions, inWorkOptions, reinvestmentPlanOptions, sectorOptions, islandOptions, termOptions} = useProjectConfiguration();


useEffect(() => {
  setSelectphaseNameOptions(phaseNameOptions || [])
  setSelectinWorkOptions(inWorkOptions || [])
  setSelectreinvestPlanOptions(reinvestmentPlanOptions || [])
  setSelectislandOptions(islandOptions || [])
  setSelectsectorOptions(sectorOptions ||[])
  setSelecttermOptions(termOptions || [])
},[])
useEffect(() => {
   if (initialData !== undefined) {
    setForm1Data(initialData);
    console.log("I am here with initial data", initialData);
    setCurrentPhaseName(initialData.phaseName);
  }

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
	<IGRPCombobox
  name={ `phaseName` }
  label={ `Nome da Fase` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1',) }
  onChange={ (value) => {setCurrentPhaseName(value as string)
} }
  options={ selectphaseNameOptions }
>
</IGRPCombobox>
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
            { currentPhaseName && currentPhaseName != null && currentPhaseName != ""
 && (<div className={ cn('flex',)}    >
	<IGRPText
  name={ `text1` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  className={ cn('','block','mr-1',) }
  
  
>
  Indicadores de 
</IGRPText>
<IGRPText
  name={ `text2` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  className={ cn() }
  
  
>
  { currentPhaseName }
</IGRPText></div>)}
            { currentPhaseName === "financiamento" && (<div className={ cn('grid','grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4',)}    >
	<IGRPCheckbox
  name={ `checkbox1` }
  label={ `Fase final da contratação do crédito` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `checkbox3` }
  label={ `Em negociação com o banco` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `checkbox2` }
  label={ `Aguarda decisão de financiamento` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox></div>)}
            { currentPhaseName === "desenvolvimento" && (<div className={ cn('grid','grid-cols-1 ','xs:grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4',)}    >
	<IGRPCheckbox
  name={ `checkbox5` }
  label={ `Elaboração de projetos de especialidades` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `checkbox4` }
  label={ `Aprovação de projetos` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `checkbox6` }
  label={ `Licenciamento de obras` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox></div>)}
            { currentPhaseName == "implementacao" && (<div className={ cn()}    >
	{ sector !== "Serviços" && (<div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ',' gap-4',)}    >
	<IGRPCombobox
  name={ `inWork` }
  label={ `Em obras` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectinWorkOptions }
>
</IGRPCombobox></div>)}
<div className={ cn('grid','grid-cols-1 ','xs:grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4 mt-4',)}    >
	<IGRPCheckbox
  name={ `checkbox7` }
  label={ `Instalação de equipamentos` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `checkbox8` }
  label={ `Vistoria e licenciamento` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox></div></div>)}
            { currentPhaseName === "funcionamento" && (<div className={ cn('grid','grid-cols-1 ','xs:grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4',)}    >
	<IGRPInputNumber
  name={ `inputNumber4` }
  label={ `Investimento Efetuado` }
max={ 9999999 }
step={ 1 }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputNumber>
<IGRPInputNumber
  name={ `inputNumber3` }
  label={ `Volume de Negócio` }
max={ 9999999 }
step={ 1 }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputNumber>
<IGRPInputNumber
  name={ `inputNumber2` }
  label={ `Empregos Previsto` }
max={ 9999999 }
step={ 1 }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputNumber>
<IGRPInputNumber
  name={ `inputNumber1` }
  label={ `Empregos Criados` }
max={ 9999999 }
step={ 1 }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputNumber>
<IGRPCombobox
  name={ `reinvestPlan` }
  label={ `Plano de Reinvestimento` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1',) }
  onChange={ (value) => {setCurrentReinVestPlan(value as string)
} }
  options={ selectreinvestPlanOptions }
>
</IGRPCombobox>
{ currentReinVestPlan === "nao" && (<IGRPTextarea
  name={ `inputTextarea1` }
  label={ `Porquê?` }
rows={ 3 }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPTextarea>)}
{ currentReinVestPlan === "sim" && (<div className={ cn('grid','grid-cols-1 ','xs:grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4',)}    >
	<IGRPCombobox
  name={ `sector` }
  label={ `Setor` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectsectorOptions }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `island` }
  label={ `Ilha` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectislandOptions }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `term` }
  label={ `Prazo` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selecttermOptions }
>
</IGRPCombobox></div>)}</div>)}
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
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
import {ProjectSlider} from '@/app/(myapp)/components/project-slider'
import { 
  IGRPModalDialog,
	IGRPModalDialogContent,
	IGRPModalDialogHeader,
	IGRPModalDialogTitle,
	IGRPForm,
	IGRPCombobox,
	IGRPText,
	IGRPCheckbox,
	IGRPInputNumber,
	IGRPTextarea,
	IGRPModalDialogFooter,
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";
import {useProjectConfiguration} from '@/app/(myapp)/hooks/project'

export default function Phasecard({ openModal, initialData, setOpen, sector } : { openModal: boolean, initialData: any, setOpen: () => void, sector: string }) {

  
  const form1 = z.object({
    phaseName: z.string().optional(),
    constructionProgress: z.string().optional(),
    equipmentInstallation: z.boolean().optional(),
    inspectionAndLicensing: z.string().optional(),
    projectElaboration: z.boolean().optional(),
    projectApproval: z.boolean().optional(),
    licensing: z.boolean().optional(),
    creditContracting: z.boolean().optional(),
    bankNegotiation: z.boolean().optional(),
    fundingDecision: z.boolean().optional(),
    investmentMade: z.number().optional(),
    businessVolume: z.number().optional(),
    jobsPlanned: z.number().optional(),
    jobsCreated: z.number().optional(),
    reinvestmentPlan: z.string().optional(),
    reason: z.string().optional(),
    sector: z.string().optional(),
    island: z.string().optional(),
    term: z.string().optional(),
    completionPercentage: z.string().optional()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    phaseName: undefined,
    constructionProgress: undefined,
    equipmentInstallation: undefined,
    inspectionAndLicensing: undefined,
    projectElaboration: undefined,
    projectApproval: undefined,
    licensing: undefined,
    creditContracting: undefined,
    bankNegotiation: undefined,
    fundingDecision: undefined,
    investmentMade: undefined,
    businessVolume: undefined,
    jobsPlanned: undefined,
    jobsCreated: undefined,
    reinvestmentPlan: undefined,
    reason: undefined,
    sector: undefined,
    island: undefined,
    term: undefined,
    completionPercentage: undefined
}


  const formform2Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [selectphaseNameOptions, setSelectphaseNameOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectconstructionProgressOptions, setSelectconstructionProgressOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectreinvestmentPlanOptions, setSelectreinvestmentPlanOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectsectorOptions, setSelectsectorOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectislandOptions, setSelectislandOptions] = useState<IGRPOptionsProps[]>([]);
  const [selecttermOptions, setSelecttermOptions] = useState<IGRPOptionsProps[]>([]);
  
const [currentPhaseName, setCurrentPhaseName] = useState<string>(undefined);

const [currentReinVestPlan, setCurrentReinVestPlan] = useState<string>(undefined);

const { igrpToast } = useIGRPToast()

const {phaseNameOptions, inWorkOptions, reinvestmentPlanOptions, sectorOptions, islandOptions, termOptions} = useProjectConfiguration();


useEffect(() => {
  setSelectphaseNameOptions(phaseNameOptions || [])
  setSelectconstructionProgressOptions(inWorkOptions || [])
  setSelectreinvestmentPlanOptions(reinvestmentPlanOptions || [])
  setSelectislandOptions(islandOptions || [])
  setSelectsectorOptions(sectorOptions ||[])
  setSelecttermOptions(termOptions || [])
},[])
useEffect(() => {
  if (initialData !== undefined) {
    const flattened = {
    ...initialData,
    ...initialData.indicators
    };
    delete flattened.indicators;

    setForm1Data(flattened);
    setCurrentPhaseName(flattened.phaseName);
    console.log("flattened.reinvestmentPlan", flattened.reinvestmentPlan)
    setCurrentReinVestPlan(flattened.reinvestmentPlan)
    
  }

}, [initialData])


  return (
<div className={ cn('component',)}    >
	<IGRPModalDialog
  onOpenChange={ setOpen }
  open={ openModal }
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
  
  
  
>
  Fase do Projeto
</IGRPModalDialogTitle>
</IGRPModalDialogHeader>
  <     >
	<IGRPForm
  schema={ form1 }
  validationMode={ `onBlur` }
formRef={ formform2Ref }
  onSubmit={ (e) => {} }
  defaultValues={ form1Data }
>
  <>
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
</IGRPCombobox></div>
  { currentPhaseName && currentPhaseName != null && currentPhaseName != ""
 && (<div className={ cn('flex',)}    >
	<IGRPText
  name={ `text1` }
  variant={ `primary` }
weight={ `semibold` }
size={ `default` }
align={ `left` }
spacing={ `none` }
maxLines={ 3 }
  className={ cn('','block','mr-1',) }
  
  
>
  Indicadores de 
</IGRPText>
<IGRPText
  name={ `text2` }
  variant={ `primary` }
weight={ `semibold` }
size={ `default` }
align={ `left` }
spacing={ `none` }
maxLines={ 3 }
  className={ cn() }
  
  
>
  { currentPhaseName }
</IGRPText></div>)}
  { currentPhaseName == "implementacao" && (<div className={ cn()}    >
	{ sector !== "Serviços" && (<div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ',' gap-4',)}    >
	<IGRPCombobox
  name={ `constructionProgress` }
  label={ `Em obras` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectconstructionProgressOptions }
>
</IGRPCombobox></div>)}
<div className={ cn('grid','grid-cols-1 ','xs:grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4 mt-4',)}    >
	<IGRPCheckbox
  name={ `equipmentInstallation` }
  label={ `Instalação de equipamentos` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `inspectionAndLicensing` }
  label={ `Vistoria e licenciamento` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox></div></div>)}
  { currentPhaseName === "desenvolvimento" && (<div className={ cn('grid','grid-cols-1 ','xs:grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4',)}    >
	<IGRPCheckbox
  name={ `projectElaboration` }
  label={ `Elaboração de projetos de especialidades` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `projectApproval` }
  label={ `Aprovação de projetos` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `licensing` }
  label={ `Licenciamento de obras` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox></div>)}
  { currentPhaseName === "financiamento" && (<div className={ cn('grid','grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4',)}    >
	<IGRPCheckbox
  name={ `creditContracting` }
  label={ `Fase final da contratação do crédito` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `bankNegotiation` }
  label={ `Em negociação com o banco` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox>
<IGRPCheckbox
  name={ `fundingDecision` }
  label={ `Aguarda decisão de financiamento` }
  className={ cn('col-span-1',) }
  
  
>
</IGRPCheckbox></div>)}
  { currentPhaseName === "funcionamento" && (<div className={ cn('grid','grid-cols-1 ','xs:grid-cols-1 ','md:grid-cols-1 ','lg:grid-cols-1 ',' gap-4',)}    >
	<IGRPInputNumber
  name={ `investmentMade` }
  label={ `Investimento Efetuado` }
max={ 9999999 }
step={ 1 }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputNumber>
<IGRPInputNumber
  name={ `businessVolume` }
  label={ `Volume de Negócio` }
max={ 9999999 }
step={ 1 }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputNumber>
<IGRPInputNumber
  name={ `jobsPlanned` }
  label={ `Empregos Previsto` }
max={ 9999999 }
step={ 1 }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputNumber>
<IGRPInputNumber
  name={ `jobsCreated` }
  label={ `Empregos Criados` }
max={ 9999999 }
step={ 1 }
required={ false }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputNumber>
<IGRPCombobox
  name={ `reinvestmentPlan` }
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
  options={ selectreinvestmentPlanOptions }
>
</IGRPCombobox>
{ currentReinVestPlan === "nao" && (<IGRPTextarea
  name={ `reason` }
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
  <ProjectSlider    ></ProjectSlider>
</>
</IGRPForm></>
  <IGRPModalDialogFooter
  className={ cn('','','block',) }
  
  
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
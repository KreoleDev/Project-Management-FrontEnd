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
import {MapClick} from '@/app/(myapp)/components/MapClick'
import { 
  IGRPForm,
	IGRPTabs,
	IGRPTabItem,
	IGRPCard,
	IGRPCardHeader,
	IGRPHeadline,
	IGRPCardContent,
	IGRPInputText,
	IGRPCombobox,
	IGRPCardFooter,
	IGRPTextarea,
	IGRPSeparator,
	IGRPInputNumber,
	IGRPFormList,
	IGRPInputFile,
	IGRPDatePicker 
} from "@igrp/igrp-framework-react-design-system";
import {useProjectConfiguration} from '@/app/(myapp)/hooks/project'

export default function Formproject({ initialData, isSubmitting, onAfterSubmit } : { initialData: any, isSubmitting: boolean, onAfterSubmit: () => void }) {

  
  const form1 = z.object({
    processNumber: z.string().optional(),
    projectName: z.string().optional(),
    promoter: z.string().optional(),
    promotingCompany: z.string().optional(),
    promoterGender: z.string().optional(),
    status: z.string().optional(),
    activity: z.string().optional(),
    investment: z.number().optional(),
    employment: z.number().optional(),
    sector: z.string().optional(),
    capitalOrigin: z.string().optional(),
    investmentOrigin: z.string().optional(),
    location: z.string().optional(),
    island: z.string().optional(),
    phone: z.string().optional(),
    nif: z.string().optional(),
    email: z.string().optional(),
    formList1: z.array(z.object({ inputFile1: z.string().optional() })).optional(),
    certificateNumber: z.string().optional(),
    referenceBo: z.string().optional(),
    approvalYear: z.string().optional(),
    publicationDateBo: z.string().optional(),
    buiPlatformStage: z.string().optional()
})

type Form1ZodType = typeof form1;

const initForm1: z.infer<Form1ZodType> = {
    processNumber: undefined,
    projectName: undefined,
    promoter: undefined,
    promotingCompany: undefined,
    promoterGender: undefined,
    status: undefined,
    activity: undefined,
    investment: undefined,
    employment: undefined,
    sector: undefined,
    capitalOrigin: undefined,
    investmentOrigin: undefined,
    location: undefined,
    island: undefined,
    phone: undefined,
    nif: undefined,
    email: undefined,
    formList1: [{ inputFile1: undefined }],
    certificateNumber: undefined,
    referenceBo: undefined,
    approvalYear: undefined,
    publicationDateBo: undefined,
    buiPlatformStage: undefined
}


  const formform1Ref = useRef<IGRPFormHandle<Form1ZodType> | null>(null);
  const [form1Data, setForm1Data] = useState<any>(initForm1);
  const [tabstabs1Items, setTabstabs1Items] = useState<IGRPTabItem[]>([]);
  const [selectpromoterGenderOptions, setSelectpromoterGenderOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectstatusOptions, setSelectstatusOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectsectorOptions, setSelectsectorOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectcapitalOriginOptions, setSelectcapitalOriginOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectinvestmentOriginOptions, setSelectinvestmentOriginOptions] = useState<IGRPOptionsProps[]>([]);
  const [selectislandOptions, setSelectislandOptions] = useState<IGRPOptionsProps[]>([]);
  const [formListformList1Default, setFormListformList1Default] = useState<any>({});
  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [selectbuiPlatformStageOptions, setSelectbuiPlatformStageOptions] = useState<IGRPOptionsProps[]>([]);
  
const { igrpToast } = useIGRPToast()

const {projectStatusOptions,
       capitalOriginOptions,
       investmentOriginOptions,
       sectorOptions,
       island,
       promoterGenderOptions,
       buiPlatformStageOptions
       } = useProjectConfiguration();

useEffect(() => {
  setSelectpromoterGenderOptions([])
  setSelectstatusOptions(projectStatusOptions || [])
  setSelectsectorOptions(sectorOptions || [])
  setSelectcapitalOriginOptions(capitalOriginOptions || [])
  setSelectinvestmentOriginOptions(investmentOriginOptions || [])
  setSelectislandOptions(island || [])
  setSelectpromoterGenderOptions(promoterGenderOptions || [])
  setSelectbuiPlatformStageOptions(buiPlatformStageOptions || [])

  if (initialData)
   setForm1Data(initialData)
}, [initialData])

useEffect(() => {
  if (isSubmitting) {
    formform1Ref.current?.submit();
    onAfterSubmit?.();
  }
}, [isSubmitting, onAfterSubmit]);


  return (
<div className={ cn('component',)}    >
	<IGRPForm
  schema={ form1 }
  validationMode={ `onBlur` }
formRef={ formform1Ref }
  className={ cn() }
  onSubmit={ (e) => {} }
  defaultValues={ form1Data }
>
  <>
  <IGRPTabs
  variant={ `default` }
  tabContentClassName={ `border rounded-lg border-none-transparent` }
  showIcon={ true }
  iconPlacement={ `start` }
  tabListClassName={ cn('w-full','mr-6',) }
  items={
    [
        {
          value: `tabsItem1-uGi_`,
          label: `Informações Básicas`,
          icon: `User`,
content: (<>
            <IGRPCard
  name={ `card1` }
  
  
  
>
  <IGRPCardHeader
  
>
  <IGRPHeadline
  name={ `headline1` }
  title={ `Informações Básicas` }
description={ undefined }
variant={ `h6` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ true }
iconName={ `User` }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  className={ cn('','space-x-3','space-y-3','grid grid grid-cols-2 grid-rows-1 gap-2 justify-items-stretch items-start','',) }
  
>
  <IGRPInputText
  name={ `processNumber` }
  label={ `Número de Processo` }
showIcon={ false }
required={ true }
  className={ cn('',) }
  
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `projectName` }
  label={ `Nome do Projeto` }
showIcon={ false }
required={ true }
  className={ cn('',) }
  
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `promoter` }
  label={ `Nome do Promotor` }
showIcon={ false }
required={ true }
  className={ cn('',) }
  
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `promotingCompany` }
  label={ `Empresa Promotora` }
showIcon={ false }
required={ true }
  className={ cn('',) }
  
  
>
</IGRPInputText>
  <IGRPCombobox
  name={ `promoterGender` }
  label={ `Género do Promotor` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('',) }
  onChange={ () => {} }
  options={ selectpromoterGenderOptions }
>
</IGRPCombobox>
  <IGRPCombobox
  name={ `status` }
  label={ `Status do Projeto` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('',) }
  onChange={ () => {} }
  options={ selectstatusOptions }
>
</IGRPCombobox>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard>
</>),
        },
        {
          value: `tabsItem2-pmxN`,
          label: `Detalhes`,
          icon: `Building`,
content: (<>
            <IGRPCard
  name={ `card2` }
  
  
  
>
  <IGRPCardHeader
  
>
  <IGRPHeadline
  name={ `headline2` }
  title={ `Detalhes do Projeto` }
description={ undefined }
variant={ `h6` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ true }
iconName={ `Building` }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  
>
  <IGRPTextarea
  name={ `activity` }
  label={ `Descrição da Atividade` }
rows={ 3 }
required={ false }
  
  
>
</IGRPTextarea>
  <IGRPSeparator
  name={ `separator1` }
  orientation={ `horizontal` }
  className={ cn('my-6',) }
  
  
>
</IGRPSeparator>
  <div className={ cn('grid grid grid-cols-3 grid-rows-1 gap-4 justify-items-stretch items-start',)}    >
	<IGRPInputNumber
  name={ `investment` }
  label={ `Investimento Total` }
max={ 9999999 }
step={ 1 }
required={ true }
  className={ cn() }
  
  
>
</IGRPInputNumber>
<IGRPInputNumber
  name={ `employment` }
  label={ `Número de Empregos` }
max={ 9999999 }
step={ 1 }
required={ true }
  className={ cn() }
  
  
>
</IGRPInputNumber>
<IGRPCombobox
  name={ `sector` }
  label={ `Sector de Actividade` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn() }
  onChange={ () => {} }
  options={ selectsectorOptions }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `capitalOrigin` }
  label={ `Origen do Capital` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn() }
  onChange={ () => {} }
  options={ selectcapitalOriginOptions }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `investmentOrigin` }
  label={ `Origem do Investimento(Promotor)` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn() }
  onChange={ () => {} }
  options={ selectinvestmentOriginOptions }
>
</IGRPCombobox></div>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard>
</>),
        },
        {
          value: `tabsItem3-YKZ1`,
          label: `Localização`,
          icon: `MapPin`,
content: (<>
            <IGRPCard
  name={ `card3` }
  
  
  
>
  <IGRPCardHeader
  
>
  <IGRPHeadline
  name={ `headline3` }
  title={ `Localização do Projeto` }
description={ undefined }
variant={ `h6` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ true }
iconName={ `MapPin` }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  className={ cn('','space-x-3','space-y-3',) }
  
>
  <div className={ cn('grid','grid-cols-2 ','md:grid-cols-2 ',' gap-4',)}    >
	<IGRPInputText
  name={ `location` }
  label={ `Localização Especifica` }
showIcon={ false }
required={ true }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPCombobox
  name={ `island` }
  label={ `Ilha` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ true }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectislandOptions }
>
</IGRPCombobox></div>
  <MapClick    ></MapClick>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard>
</>),
        },
        {
          value: `tabsItem5-W_-Z`,
          label: `Contato`,
          icon: `Phone`,
content: (<>
            <IGRPCard
  name={ `card4` }
  
  
  
>
  <IGRPCardHeader
  
>
  <IGRPHeadline
  name={ `headline4` }
  title={ `Contato` }
description={ undefined }
variant={ `h6` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ true }
iconName={ `Phone` }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  className={ cn('','space-x-3','space-y-3',) }
  
>
  <div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-3 ',' gap-4',)}    >
	<IGRPInputText
  name={ `phone` }
  label={ `Telefone` }
showIcon={ false }
required={ true }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputText>
<IGRPInputNumber
  name={ `nif` }
  label={ `NIF` }
max={ 9999999 }
step={ 1 }
required={ true }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputNumber>
<IGRPInputText
  name={ `email` }
  label={ `Email de Contato` }
showIcon={ false }
required={ true }
  className={ cn('col-span-1',) }
  
  
>
</IGRPInputText></div>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard>
</>),
        },
        {
          value: `tabsItem6-VlTP`,
          label: `Documentos`,
          icon: `Newspaper`,
content: (<>
            <IGRPCard
  name={ `card5` }
  
  
  
>
  <IGRPCardHeader
  
>
  <IGRPHeadline
  name={ `headline5` }
  title={ `Documentos do Projeto` }
description={ undefined }
variant={ `h6` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ true }
iconName={ `FileText` }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  
>
  <IGRPFormList
  id={ `formlist_4sfga6` }
  name={ `formList1` }
  label={ `Anexo` }
  color={ `primary` }
  variant={ `solid` }
  addButtonLabel={ `Add` }
  addButtonIconName={ `Plus` }
renderItem={ (_: any, index: number) => (
      <>
        <div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ',' gap-4',)}    >
	<IGRPCombobox
  name={ `formList1.${index}.combobox1` }
  label={ `Tipo documento` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ undefined }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  onChange={ () => {} }
  options={ selectcombobox1Options }
>
</IGRPCombobox>
<IGRPInputFile
  name={ `formList1.${index}.inputFile1` }
  label={ `Carregar documentos` }
accept={ `application/pdf` }
required={ false }
  
  
>
</IGRPInputFile></div>
</>
    )
  }
  computeLabel={
    (item: any, index: number) => `Item ${index}`
  }
  
  defaultItem={ formListformList1Default }
>
</IGRPFormList>

</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard>
</>),
        },
        {
          value: `tabsItem7-7nlt`,
          label: `Admin`,
          icon: `Shield`,
content: (<>
            <IGRPCard
  name={ `card6` }
  
  
  
>
  <IGRPCardHeader
  
>
  <IGRPHeadline
  name={ `headline6` }
  title={ `Informações Administrativas` }
description={ undefined }
variant={ `h6` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ true }
iconName={ `Shield` }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  className={ cn('','space-x-3','space-y-3','grid grid grid-cols-2 grid-rows-1 gap-2 justify-items-stretch items-start','',) }
  
>
  <IGRPInputText
  name={ `certificateNumber` }
  label={ `Número do Cerificado` }
showIcon={ false }
required={ true }
  className={ cn('',) }
  
  
>
</IGRPInputText>
  <IGRPInputText
  name={ `referenceBo` }
  label={ `Referência do BO` }
showIcon={ false }
required={ true }
  className={ cn('',) }
  
  
>
</IGRPInputText>
  <IGRPDatePicker
  placeholder={ `Please select a date...` }
  name={ `approvalYear` }
  id={ `approvalYear` }
  label={ `Data de Aprovação` }
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
  className={ cn('',) }
  
/>
  <IGRPDatePicker
  placeholder={ `Please select a date...` }
  name={ `publicationDateBo` }
  id={ `publicationDateBo` }
  label={ `Data de Publicação no BO` }
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
  className={ cn('',) }
  
/>
  <IGRPCombobox
  name={ `buiPlatformStage` }
  label={ `Etapa na Plataforma BUI` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('',) }
  onChange={ () => {} }
  options={ selectbuiPlatformStageOptions }
>
</IGRPCombobox>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard>
</>),
        },
]
  }
/>
</>
</IGRPForm></div>
  );
}
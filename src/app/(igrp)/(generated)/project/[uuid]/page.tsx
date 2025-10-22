'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import {ProjectProgress} from '@/app/(myapp)/components/project-progress'
import DetailCard from '@/app/(igrp)/(generated)/project/components/detailcard'
import DevelopmentIndicator from '@/app/(igrp)/(generated)/project/components/developmentindicator'
import FinancingIndicator from '@/app/(igrp)/(generated)/project/components/financingindicator'
import ImplementationIndicator from '@/app/(igrp)/(generated)/project/components/implementationindicator'
import FunctioningIndicator from '@/app/(igrp)/(generated)/project/components/functioningindicator'
import StatusChange from '@/app/(igrp)/(generated)/project/components/statuschange'
import PhaseCard from '@/app/(igrp)/(generated)/project/components/phasecard'
import SituationCard from '@/app/(igrp)/(generated)/project/components/situationcard'
import { 
  IGRPPageHeader,
	IGRPButton,
	IGRPBadge,
	IGRPText,
	IGRPTabs,
	IGRPTabItem,
	IGRPCard,
	IGRPCardHeader,
	IGRPHeadline,
	IGRPCardContent,
	IGRPCardFooter,
	IGRPRepetitiveComponent,
	IGRPIcon,
	IGRPSeparator 
} from "@igrp/igrp-framework-react-design-system";
import {useDetailProject} from '@/app/(myapp)/hooks/project'
import { useRouter } from "next/navigation";


export default function PageProjectdetailComponent({ params } : { params: Promise<{ uuid: string }> } ) {

  const { uuid } = use(params);

  
  type RepetitiveSituation = {
}

  const [tabstabs1Items, setTabstabs1Items] = useState<IGRPTabItem[]>([]);
  const [repetitiveListrepetitiveList2, setRepetitiveListrepetitiveList2] = useState<any[]>([]);
  const [repetitiveListrepetitiveList1, setRepetitiveListrepetitiveList1] = useState<any[]>([]);
  const [repetitiveListrepetitiveList3, setRepetitiveListrepetitiveList3] = useState<RepetitiveSituation[]>([]);
  
  
const [promotingCompany, setPromotingCompany] = useState<string>(undefined);

const [processNumber, setProcessNumber] = useState<string>(undefined);

const [buiNumber, setBuiNumber] = useState<string>(undefined);

const [projectName, setProjectName] = useState<string>(undefined);

const [promoter, setPromoter] = useState<string>(undefined);

const [promoterGender, setPromoterGender] = useState<string>(undefined);

const [activity, setActivity] = useState<string>(undefined);

const [investment, setInvestment] = useState<number>(undefined);

const [employment, setEmployment] = useState<string>(undefined);

const [sector, setSector] = useState<string>(undefined);

const [location, setLocation] = useState<string>(undefined);

const [island, setIsland] = useState<string>(undefined);

const [capitalOrigin, setCapitalOrigin] = useState<string>(undefined);

const [investmentOrigin, setInvestmentOrigin] = useState<string>(undefined);

const [nif, setNif] = useState<number>(undefined);

const [buiPlatformStage, setBuiPlatformStage] = useState<string>(undefined);

const [approvalYear, setApprovalYear] = useState<string>(undefined);

const [certificateNumber, setCertificateNumber] = useState<string>(undefined);

const [publicationDateBo, setPublicationDateBo] = useState<string>(undefined);

const [referenceBo, setReferenceBo] = useState<string>(undefined);

const [email, setEmail] = useState<string>(undefined);

const [phone, setPhone] = useState<string>(undefined);

const [status, setStatus] = useState<string>(undefined);

const [createdAt, setCreatedAt] = useState<string>(undefined);

const [updatedAt, setUpdatedAt] = useState<string>(undefined);

const [phases, setPhases] = useState<array>(undefined);

const [comments, setComments] = useState<array>(undefined);

const [documents, setDocuments] = useState<array>(undefined);

const [phaseNameDesc, setPhaseNameDesc] = useState<string>(undefined);

const [phaseOrder, setPhaseOrder] = useState<number>(undefined);

const [completionPercentage, setCompletionPercentage] = useState<number>(undefined);

const [startedAt, setStartedAt] = useState<string>(undefined);

const [completedAt, setCompletedAt] = useState<string>(undefined);

const [fundingDecision, setFundingDecision] = useState<string>(undefined);

const [bankNegotiation, setBankNegotiation] = useState<string>(undefined);

const [creditContracting, setCreditContracting] = useState<string>(undefined);

const [progress, setProgress] = useState<number>(undefined);

const [openStatusModal, setOpenStatusModal] = useState<boolean>(undefined);

const [currentData, setCurrentData] = useState<any>(undefined);

const [statusDesc, setStatusDesc] = useState<string>(undefined);

const [openPhaseModal, setOpenPhaseModal] = useState<boolean>(undefined);

const [phaseCurrentData, setPhaseCurrentData] = useState<any>(undefined);

const [title, setTitle] = useState<string>(undefined);

const [description, setDescription] = useState<string>(undefined);

const [openSituationModal, setOpenSituationModal] = useState<boolean>(undefined);

const [currentStituation, setCurrentStituation] = useState<any>(undefined);

const { igrpToast } = useIGRPToast()

const router = useRouter()

function editProject (uuid: string): void  | undefined {

  router.push(`project/${uuid}/id`)

}

const {data} = useDetailProject(uuid);

useEffect(() => {
  if(!data) return;
  setCurrentData(data)

  setProcessNumber(data.processNumber ? `Processo Nº ${data.processNumber}` : "")
  setBuiNumber(data.buiNumber)
  setProjectName(data.projectName)
  setPromoter(data.promoter)
  setPromoterGender(data.promoterGender)
  setPromotingCompany(data.promotingCompany)
  setActivity(data.activity)
  setInvestment(data.investment)
  setEmployment(data.employment)
  setSector(data.sector)
  setLocation(data.location)
  setIsland(data.island)
  setCapitalOrigin(data.capitalOrigin)
  setInvestmentOrigin(data.investmentOrigin)
  setNif(data.nif)
  setBuiPlatformStage(data.buiPlatformStage)
  setApprovalYear(data.approvalYear)
  setCertificateNumber(data.certificateNumber)
  setPublicationDateBo(data.publicationDateBo)
  setReferenceBo(data.referenceBo)
  setEmail(data.email)
  setPhone(data.phone)
  setStatus(data.status)
  setStatusDesc(data.statusDesc)

  setProgress(data.progress)

  setCreatedAt(data.createdAt)
  setUpdatedAt(data.updatedAt)

  

  
  /*setPhaseName(data.phases.phaseName)
  setPhaseOrder(data.phases.phaseOrder)
  setCompletionPercentage(data.phases.completionPercentage)
  setStartedAt(data.phases.completedAt)
  setCompletedAt(data.phases.completedAt)
  setFundingDecision(data.phases.fundingDecision)
  setBankNegotiation(data.phases.bankNegotiation)
  setCreditContracting(data.phases.creditContracting) */

  //setComments(data.comments)
  setRepetitiveListrepetitiveList1(data.documents || [])
  setRepetitiveListrepetitiveList2(data.phases || [])
  setRepetitiveListrepetitiveList3(data.situation || [])



},[data])

function goToeditProject (row?: any): void {
  router.push(`/project/${uuid}/edit`);
}


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  iconBackButton={ `ArrowLeft` }
  showBackButton={ true }
  urlBackButton={ `/project` }
  variant={ `h4` }
  title={ promotingCompany }
description={ processNumber }
>
  <div className="flex items-center gap-2">
    <IGRPButton
  name={ `button3` }
  variant={ `outline` }
size={ `sm` }
showIcon={ true }
iconName={ `RefreshCcw` }
  className={ cn() }
  onClick={ () => {setOpenStatusModal(!openStatusModal); setCurrentData(currentData)


} }
  
>
  Alterar Status
</IGRPButton>
    <IGRPButton
  name={ `button1` }
  variant={ `outline` }
size={ `sm` }
showIcon={ true }
iconName={ `SquarePen` }
  className={ cn() }
  onClick={ () => goToeditProject() }
  
>
  Editar
</IGRPButton>
    <IGRPButton
  name={ `button2` }
  variant={ `destructive` }
size={ `sm` }
showIcon={ true }
iconName={ `Trash2` }
  className={ cn() }
  onClick={ () => {} }
  
>
  Eliminar
</IGRPButton>
</div>
</IGRPPageHeader>

<div className={ cn('block','mr-3 ml-3 mx-3 pt-3 pr-5 pb-3 pl-5 px-5 py-3',' rounded-lg border space-y-4',)}    >
	<div className={ cn('flex','flex flex-row flex-nowrap items-center justify-between gap-2',)}    >
	<IGRPBadge
  name={ `badge1` }
  color={ `success` }
variant={ `outline` }
size={ `lg` }
showIcon={ false }
iconName={ `Info` }
iconPlacement={ `start` }
  badgeClassName={ cn() }
  
  
>
  { statusDesc }
</IGRPBadge>
<div className={ cn()}    >
	<IGRPText
  name={ `text2` }
  variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Última atualização
</IGRPText>
<IGRPText
  name={ `text1` }
  variant={ `primary` }
weight={ `semibold` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  { updatedAt }
</IGRPText></div></div>
<ProjectProgress  value={ progress } label={ statusDesc }   ></ProjectProgress>
<div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ','grid grid grid-cols-4 grid-rows-1 gap-2 justify-items-stretch items-start',' gap-4 w-full',)}    >
	<DetailCard  icon={ `Euro` } title={ `Investimento` } count={ investment }   ></DetailCard>
<DetailCard  icon={ `Users` } title={ `Empregos` } count={ employment }   ></DetailCard>
<DetailCard  title={ `Sector` } icon={ `Building` } count={ sector }   ></DetailCard>
<DetailCard  title={ `Ilha` } icon={ `MapPin` } count={ island }   ></DetailCard></div></div>
<div className={ cn('mr-3 ml-3 mx-3 pt-3 pr- pb-3 pl- px- py-3',)}    >
	<IGRPTabs
  variant={ `default` }
  tabContentClassName={ `border rounded-lg border-none-transparent` }
  iconPlacement={ `start` }
  tabListClassName={ cn('w-full',) }
  items={
    [
        {
          value: `tabsItem1-q76P`,
          label: `Visão Geral`,
          icon: `ArrowRight`,
content: (<>
            <div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-2 ',' gap-4',)}    >
	<IGRPCard
  name={ `card1` }
  
  className={ cn('col-span-1',) }
  
  
>
  <IGRPCardHeader
  
>
  <IGRPHeadline
  name={ `headline1` }
  title={ `Informações do Promotor` }
description={ undefined }
variant={ `h6` }
roleColor={ `solid` }
color={ `secondary` }
showIcon={ true }
iconName={ `Users` }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  
>
  <IGRPText
  name={ `text4` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Nome do Promotor
</IGRPText>
  <IGRPText
  name={ `text5` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  
  
>
  { promoter }
</IGRPText>
  <IGRPText
  name={ `text6` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Genero
</IGRPText>
  <IGRPText
  name={ `text3` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ `0` }
  
  
>
  { promoterGender }
</IGRPText>
  <IGRPText
  name={ `text9` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  NIF
</IGRPText>
  <IGRPText
  name={ `text10` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ `0` }
  
  
>
  { nif }
</IGRPText>
  <IGRPText
  name={ `text8` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Email
</IGRPText>
  <IGRPText
  name={ `text7` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  
  
>
  { email }
</IGRPText>
  <IGRPText
  name={ `text11` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Telefone
</IGRPText>
  <IGRPText
  name={ `text12` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ `0` }
  
  
>
  { phone }
</IGRPText>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard>
<IGRPCard
  name={ `card4` }
  
  className={ cn('col-span-1',) }
  
  
>
  <IGRPCardHeader
  
>
  <IGRPHeadline
  name={ `headline2` }
  title={ `Detalhes do Projeto` }
description={ undefined }
variant={ `h6` }
roleColor={ `solid` }
color={ `secondary` }
showIcon={ true }
iconName={ `Building` }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  
>
  <IGRPText
  name={ `text17` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Actividade
</IGRPText>
  <IGRPText
  name={ `text16` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  
  
>
  { activity }
</IGRPText>
  <IGRPText
  name={ `text15` }
  variant={ `secondary` }
weight={ `normal` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  sector
</IGRPText>
  <IGRPText
  name={ `text18` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  
  
>
  { sector }
</IGRPText>
  <IGRPText
  name={ `text13` }
  variant={ `secondary` }
weight={ `normal` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Ano de Aprocação
</IGRPText>
  <IGRPText
  name={ `text14` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  
  
>
  { approvalYear }
</IGRPText>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard>
<IGRPCard
  name={ `card3` }
  
  className={ cn('col-span-1',) }
  
  
>
  <IGRPCardHeader
  
>
  <IGRPHeadline
  name={ `headline3` }
  title={ `Localização e Origem` }
description={ undefined }
variant={ `h6` }
roleColor={ `solid` }
color={ `secondary` }
showIcon={ true }
iconName={ `MapPin` }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  
>
  <IGRPText
  name={ `text22` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Localização
</IGRPText>
  <IGRPText
  name={ `text19` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  
  
>
  { location }
</IGRPText>
  <IGRPText
  name={ `text20` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Ilha
</IGRPText>
  <IGRPText
  name={ `text21` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  
  
>
  { island }
</IGRPText>
  <IGRPText
  name={ `text23` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Origem do Capital
</IGRPText>
  <IGRPText
  name={ `text24` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  
  
>
  { capitalOrigin }
</IGRPText>
  <IGRPText
  name={ `text26` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Origem do Investimento
</IGRPText>
  <IGRPText
  name={ `text25` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  
  
>
  { investmentOrigin }
</IGRPText>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard>
<IGRPCard
  name={ `card2` }
  
  className={ cn('col-span-1',) }
  
  
>
  <IGRPCardHeader
  
>
  <IGRPHeadline
  name={ `headline4` }
  title={ `Informações Administrativas` }
description={ undefined }
variant={ `h6` }
roleColor={ `solid` }
color={ `secondary` }
showIcon={ true }
iconName={ `Award` }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  
>
  <IGRPText
  name={ `text29` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Etapa Plataforma BUI
</IGRPText>
  <IGRPBadge
  name={ `badge2` }
  color={ `primary` }
variant={ `solid` }
size={ `md` }
showIcon={ false }
iconName={ `Info` }
iconPlacement={ `start` }
  
  
>
  { buiPlatformStage }
</IGRPBadge>
  <IGRPText
  name={ `text31` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Número do Certificado
</IGRPText>
  <IGRPText
  name={ `text28` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  
  
>
  { certificateNumber }
</IGRPText>
  <IGRPText
  name={ `text33` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Data Publicação BO
</IGRPText>
  <IGRPText
  name={ `text32` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  
  
>
  { publicationDateBo }
</IGRPText>
  <IGRPText
  name={ `text30` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  
  
>
  Ref.ª BO
</IGRPText>
  <IGRPText
  name={ `text27` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  
  
>
  { referenceBo }
</IGRPText>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard></div>
</>),
        },
        {
          value: `tabsItem2-BZsh`,
          label: `Fases do Projeto`,
          icon: `ArrowRight`,
content: (<>
            <IGRPCard
  name={ `card6` }
  
  
  
>
  <IGRPCardHeader
  className={ cn() }
  
>
  <div className={ cn('flex','justify-between',)}    >
	<IGRPText
  name={ `text36` }
  variant={ `primary` }
weight={ `semibold` }
size={ `lg` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  className={ cn() }
  
  
>
  Fases do Projeto
</IGRPText>
<IGRPButton
  name={ `button5` }
  variant={ `outline` }
size={ `default` }
showIcon={ true }
iconName={ `Plus` }
  className={ cn() }
  onClick={ () => {setOpenPhaseModal(!openPhaseModal)
} }
  
>
  Nova Fase
</IGRPButton></div>
</IGRPCardHeader>
  <IGRPCardContent
  className={ cn('space-x-3','space-y-3',) }
  
>
  <IGRPRepetitiveComponent<any>
  keyExtractor={ (item) => item.id }
  items={ repetitiveListrepetitiveList2 }
>
{ (item) =>
  <>
  <div className={ cn('flex','justify-between','flex flex-row flex-nowrap items-center justify-between gap-2',)}    >
	<IGRPText
  name={ `text37` }
  variant={ `success` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  { item.phaseNameDesc }
</IGRPText>
<div className={ cn('flex flex-row flex-nowrap items-center justify-end gap-2',)}    >
	<IGRPBadge
  name={ `badge3` }
  color={ `success` }
variant={ `outline` }
size={ `md` }
showIcon={ false }
iconName={ `Info` }
iconPlacement={ `start` }
  badgeClassName={ cn() }
  
  
>
  { item.status }
</IGRPBadge>
<IGRPButton
  name={ `button6` }
  variant={ `outline` }
size={ `sm` }
showIcon={ true }
iconName={ `SquarePen` }
  className={ cn() }
  onClick={ () => {setOpenPhaseModal(!openPhaseModal); setPhaseCurrentData(item)


} }
  
>
  Editar Fase
</IGRPButton></div></div>
  <div className={ cn('pl-8',)}    >
	<ProjectProgress  label={ `Progresso` } value={ item.completionPercentage }   ></ProjectProgress>
{ item.phaseName === "desenvolvimento" && (<div className={ cn()}    >
	<DevelopmentIndicator    ></DevelopmentIndicator></div>)}
{ item.phaseName === "financiamento" && (<div className={ cn()}    >
	<FinancingIndicator    ></FinancingIndicator></div>)}
{ item.phaseName === "implementacao" && (<div className={ cn()}    >
	<ImplementationIndicator  sector={ sector }   ></ImplementationIndicator></div>)}
{ item.phaseName === "funcionamento" && (<div className={ cn()}    >
	<FunctioningIndicator  investmentMade={ item.investmentMade } businessVolume={ item.businessVolume } jobsPlanned={ item.jobsPlanned } jobsCreated={ item.jobsCreated } reinvestmentPlan={ item.reinvestmentPlan } island={ item.island } sector={ item.sector } term={ item.term } reason={ item.reason } itemData={ item.indicators }   ></FunctioningIndicator></div>)}</div>
</>
}
</IGRPRepetitiveComponent>

</IGRPCardContent>
  <IGRPCardFooter
  className={ cn() }
  
>
</IGRPCardFooter>
</IGRPCard>
</>),
        },
        {
          value: `tabsItem3-hVSM`,
          label: `Documentos`,
          icon: `ArrowRight`,
content: (<>
            <IGRPCard
  name={ `card5` }
  
  
  
>
  <IGRPCardHeader
  className={ cn() }
  
>
  <IGRPHeadline
  name={ `headline5` }
  title={ `Documentos do Projeto` }
description={ undefined }
variant={ `h6` }
roleColor={ `solid` }
color={ `secondary` }
showIcon={ false }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  className={ cn('space-x-3','space-y-3',) }
  
>
  <IGRPRepetitiveComponent<any>
  keyExtractor={ (item) => item.id }
  items={ repetitiveListrepetitiveList1 }
>
{ (item) =>
  <>
  <div className={ cn('flex','flex flex-row flex-nowrap items-center justify-between gap-2',' rounded-lg border p-2 mb-2',)}    >
	<div className={ cn('flex flex-row flex-nowrap items-center justify-start gap-2',)}    >
	<IGRPIcon
  name={ `icon2` }
  iconName={ `FileText` }
size={ `34` }
  className={ cn() }
  
  
>
</IGRPIcon>
<div className={ cn(' mt-2',)}    >
	<IGRPText
  name={ `text35` }
  variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  { item.name }
</IGRPText>
<IGRPText
  name={ `text34` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  className={ cn() }
  
  
>
  { item.description }
</IGRPText></div></div>
<IGRPButton
  name={ `button4` }
  variant={ `outline` }
size={ `default` }
showIcon={ true }
iconName={ `FileText` }
  className={ cn() }
  onClick={ () => {} }
  
>
</IGRPButton></div>
</>
}
</IGRPRepetitiveComponent>

</IGRPCardContent>
  <IGRPCardFooter
  className={ cn() }
  
>
</IGRPCardFooter>
</IGRPCard>
</>),
        },
        {
          value: `tabsItem4-Wm1w`,
          label: `Ponto de Situação`,
          icon: `ArrowRight`,
content: (<>
            <IGRPCard
  name={ `card7` }
  
  
  
>
  <IGRPCardHeader
  
>
  <IGRPHeadline
  name={ `headline6` }
  title={ `Ponto de Situação` }
description={ undefined }
variant={ `h6` }
roleColor={ `solid` }
color={ `secondary` }
showIcon={ false }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  
>
  <IGRPRepetitiveComponent<RepetitiveSituation>
  keyExtractor={ (item) => item.id }
  items={ repetitiveListrepetitiveList3 }
>
{ (item) =>
  <>
  <div className={ cn('flex','flex flex-row flex-nowrap items-start justify-between gap-2',)}    >
	<div className={ cn()}    >
	<div className={ cn('flex','flex flex-row flex-nowrap items-center justify-between gap-2',)}    >
	<IGRPText
  name={ `text38` }
  variant={ `primary` }
weight={ `semibold` }
size={ `lg` }
align={ `left` }
spacing={ `none` }
maxLines={ 3 }
  className={ cn() }
  
  
>
  { item.title }
</IGRPText>
<IGRPBadge
  name={ `badge4` }
  color={ `primary` }
variant={ `solid` }
size={ `md` }
showIcon={ false }
iconName={ `Info` }
iconPlacement={ `start` }
  badgeClassName={ cn() }
  
  
>
  { item.statusDesc }
</IGRPBadge></div></div>
<div className={ cn('flex flex-row flex-nowrap items-center justify-end gap-2',)}    >
	<IGRPButton
  name={ `button8` }
  variant={ `ghost` }
size={ `default` }
showIcon={ true }
iconName={ `SquarePen` }
  className={ cn() }
  onClick={ () => {setOpenSituationModal(!openSituationModal); setCurrentStituation(item)

} }
  
>
</IGRPButton>
<IGRPButton
  name={ `button7` }
  variant={ `destructive` }
size={ `sm` }
showIcon={ true }
iconName={ `Trash2` }
  className={ cn() }
  onClick={ () => {} }
  
>
</IGRPButton></div></div>
  <div className={ cn('block',)}    >
	<IGRPText
  name={ `text39` }
  variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  className={ cn() }
  
  
>
  { item.description }
</IGRPText>
<IGRPText
  name={ `text40` }
  variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  className={ cn() }
  
  
>
  { item.createdAt }
</IGRPText></div>
</>
}
</IGRPRepetitiveComponent>

  <IGRPSeparator
  name={ `separator1` }
  orientation={ `horizontal` }
  className={ cn('my-4',) }
  
  
>
</IGRPSeparator>
</IGRPCardContent>
  <IGRPCardFooter
  
>
</IGRPCardFooter>
</IGRPCard>
</>),
        },
]
  }
/></div></div>
<StatusChange  openModal={ openStatusModal } initialStatus={ status } initialData={ currentData }  setOpen={ setOpenStatusModal
 } ></StatusChange>
<PhaseCard  openModal={ openPhaseModal } initialData={ phaseCurrentData } sector={ sector }  setOpen={ setOpenPhaseModal
 } ></PhaseCard>
<SituationCard  open={ openSituationModal } initialData={ currentStituation }  setOpen={ setOpenSituationModal
 } ></SituationCard></div>
  );
}

'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { 
  IGRPText,
	IGRPSeparator,
	IGRPBadge 
} from "@igrp/igrp-framework-react-design-system";

export default function Functioningindicator({ itemData } : { itemData: any }) {

  
  
  
const [investmentMade, setInvestmentMade] = useState<number>(undefined);

const [businessVolume, setBusinessVolume] = useState<number>(undefined);

const [jobsPlanned, setJobsPlanned] = useState<number>(undefined);

const [jobsCreated, setJobsCreated] = useState<number>(undefined);

const [reinvestmentPlan, setReinvestmentPlan] = useState<string>(undefined);

const [island, setIsland] = useState<string>(undefined);

const [sector, setSector] = useState<string>(undefined);

const [term, setTerm] = useState<string>(undefined);

const [reason, setReason] = useState<string>(undefined);

const [reinvestmentDesc, setReinvestmentDesc] = useState<string>(undefined);

const { igrpToast } = useIGRPToast()

useEffect(() => {
  setInvestmentMade(itemData.investmentMade)
setBusinessVolume(itemData.businessVolume)
setJobsPlanned(itemData.jobsPlanned)
setJobsCreated(itemData.jobsCreated)
setReinvestmentPlan(itemData.reinvestmentPlan)
setReinvestmentDesc(itemData.reinvestmentDesc)
setIsland(itemData.island)
setSector(itemData.sector)
setTerm(itemData.term)
setReason(itemData.reason)

},[])


  return (
<div className={ cn('component',)}    >
	<div className={ cn('section',' space-y-6',)}    >
	<div className={ cn(' rounded-lg border p-4 my-3',)}    >
	<IGRPText
  name={ `text1` }
  variant={ `primary` }
weight={ `normal` }
size={ `default` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  className={ cn() }
  
  
>
  Indicadores de Funcionamento
</IGRPText>
<div className={ cn('flex','flex flex-row flex-nowrap items-center justify-between gap-2',)}    >
	<IGRPText
  name={ `text2` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  Investimento Efetuado:
</IGRPText>
<IGRPText
  name={ `text3` }
  variant={ `primary` }
weight={ `normal` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  { investmentMade }
</IGRPText></div>
<div className={ cn('flex','flex flex-row flex-nowrap items-center justify-between gap-2',)}    >
	<IGRPText
  name={ `text5` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  Volume de Negócios:
</IGRPText>
<IGRPText
  name={ `text4` }
  variant={ `primary` }
weight={ `normal` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn('',) }
  
  
>
  { businessVolume }
</IGRPText></div>
<div className={ cn('flex','flex flex-row flex-nowrap items-center justify-between gap-2',)}    >
	<IGRPText
  name={ `text7` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  Empregos Propostos (previstos):
</IGRPText>
<IGRPText
  name={ `text6` }
  variant={ `primary` }
weight={ `normal` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  { jobsPlanned }
</IGRPText></div>
<div className={ cn('flex','flex flex-row flex-nowrap items-center justify-between gap-2',)}    >
	<IGRPText
  name={ `text9` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  Empregos Ativos (criados):
</IGRPText>
<IGRPText
  name={ `text8` }
  variant={ `primary` }
weight={ `normal` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  { jobsCreated }
</IGRPText></div>
<IGRPSeparator
  name={ `separator1` }
  orientation={ `horizontal` }
  className={ cn('my-5',) }
  
  
>
</IGRPSeparator>
<div className={ cn('flex','flex flex-row flex-nowrap items-center justify-between gap-2',' mb-3',)}    >
	<IGRPText
  name={ `text11` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  Plano de Reinvestimento:
</IGRPText>
<IGRPBadge
  name={ `badge1` }
  color={ `primary` }
variant={ `outline` }
size={ `md` }
showIcon={ false }
iconName={ `Info` }
iconPlacement={ `start` }
  badgeClassName={ cn() }
  
  
>
  { reinvestmentPlan }
</IGRPBadge></div>
{ reinvestmentDesc === "sim" && (<div className={ cn()}    >
	<div className={ cn('flex','flex flex-row flex-nowrap items-center justify-between gap-2',)}    >
	<IGRPText
  name={ `text12` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  Setor
</IGRPText>
<IGRPText
  name={ `text10` }
  variant={ `primary` }
weight={ `normal` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  { sector }
</IGRPText></div>
<div className={ cn('flex','flex flex-row flex-nowrap items-center justify-between gap-2',)}    >
	<IGRPText
  name={ `text14` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  Ilha
</IGRPText>
<IGRPText
  name={ `text13` }
  variant={ `primary` }
weight={ `normal` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  { island }
</IGRPText></div>
<div className={ cn('flex','flex flex-row flex-nowrap items-center justify-between gap-2',)}    >
	<IGRPText
  name={ `text15` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  Prazo
</IGRPText>
<IGRPBadge
  name={ `badge2` }
  color={ `primary` }
variant={ `outline` }
size={ `md` }
showIcon={ false }
iconName={ `Info` }
iconPlacement={ `start` }
  badgeClassName={ cn() }
  
  
>
  { term }
</IGRPBadge></div></div>)}
{ reinvestmentDesc == "nao" && (<div className={ cn()}    >
	<IGRPText
  name={ `text17` }
  variant={ `secondary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  Porquê?
</IGRPText>
<IGRPText
  name={ `text16` }
  variant={ `primary` }
weight={ `light` }
size={ `sm` }
align={ `left` }
spacing={ `none` }
maxLines={ `0` }
  className={ cn() }
  
  
>
  { reason }
</IGRPText></div>)}</div></div></div>
  );
}
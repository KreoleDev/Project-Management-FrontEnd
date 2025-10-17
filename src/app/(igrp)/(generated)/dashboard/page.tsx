'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import DashboardCard from '@/app/(igrp)/(generated)/dashboard/components/dashboardcard'
import { 
  IGRPPageHeader,
	IGRPButton,
	IGRPCard,
	IGRPCardHeader,
	IGRPHeadline,
	IGRPCardContent,
	IGRPCardFooter 
} from "@igrp/igrp-framework-react-design-system";


export default function PageDashboardComponent() {


  
  
  
const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Dashboard` }
  description={ `Sistema de Gestão de Projetos` }
  iconBackButton={ `ArrowLeft` }
  variant={ `h3` }
  
>
  <div className="flex items-center gap-2">
    <IGRPButton
  name={ `button1` }
  variant={ `default` }
size={ `default` }
showIcon={ true }
iconName={ `Plus` }
  className={ cn() }
  onClick={ () => {} }
  
>
  Novo Projeto
</IGRPButton>
</div>
</IGRPPageHeader>

<div className={ cn('pt-3 pr-5 pb-3 pl-5 px-5 py-3',)}    >
	<div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ',' gap-4',)}    >
	<DashboardCard  title={ `Total de Projetos` } body={ `1,234` } percentage={ `+12% ` }   ></DashboardCard>
<DashboardCard  title={ `Investimento Total` }   ></DashboardCard>
<DashboardCard  title={ `Empregos Criados` }   ></DashboardCard>
<DashboardCard  title={ `Taxa de Aprovação` }   ></DashboardCard></div>
<IGRPCard
  name={ `card1` }
  
  className={ cn('','mt-8',) }
  
  
>
  <IGRPCardHeader
  className={ cn() }
  
>
  <IGRPHeadline
  name={ `headline1` }
  title={ `Projetos Recentes` }
description={ undefined }
variant={ `h6` }
roleColor={ `solid` }
color={ `primary` }
showIcon={ false }
  
  
>
</IGRPHeadline>
</IGRPCardHeader>
  <IGRPCardContent
  className={ cn('space-x-3','space-y-3',) }
  
>
</IGRPCardContent>
  <IGRPCardFooter
  className={ cn() }
  
>
</IGRPCardFooter>
</IGRPCard></div></div></div>
  );
}

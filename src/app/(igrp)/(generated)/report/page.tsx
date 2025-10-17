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
	IGRPButton 
} from "@igrp/igrp-framework-react-design-system";


export default function PageReportComponent() {


  
  
  
const { igrpToast } = useIGRPToast()


  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Relatórios e Análises` }
  description={ `Análise detalhada dos projetos e investimentos` }
  iconBackButton={ `ArrowLeft` }
  variant={ `h3` }
  
>
  <div className="flex items-center gap-2">
    <IGRPButton
  name={ `button1` }
  variant={ `outline` }
size={ `default` }
showIcon={ true }
iconName={ `ArrowDownToLine` }
  className={ cn() }
  onClick={ () => {} }
  
>
  Exportar
</IGRPButton>
</div>
</IGRPPageHeader>

<div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ','mt-6',' gap-4',)}    >
	<DashboardCard  title={ `Projetos Ativos` } body={ `291` }   ></DashboardCard>
<DashboardCard  title={ `Investimento Total` } body={ `45.7M` }   ></DashboardCard>
<DashboardCard  title={ `Empregos Criados` } body={ `2846` }   ></DashboardCard>
<DashboardCard  title={ `Taxa de Sucesso` } body={ `87%` }   ></DashboardCard></div></div></div>
  );
}

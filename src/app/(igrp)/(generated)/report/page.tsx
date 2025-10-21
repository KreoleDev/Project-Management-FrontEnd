'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";
import { DateRange } from "@igrp/igrp-framework-react-design-system";
import DashboardCard from '@/app/(igrp)/(generated)/dashboard/components/dashboardcard'
import {DetailsReport} from '@/app/(myapp)/components/details-report'
import { 
  IGRPPageHeader,
	IGRPButton,
	IGRPCard,
	IGRPCardHeader,
	IGRPText,
	IGRPCardContent,
	IGRPCombobox,
	IGRPDatePickerRange,
	IGRPCardFooter 
} from "@igrp/igrp-framework-react-design-system";


export default function PageReportComponent() {


  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox3Options, setSelectcombobox3Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox2Options, setSelectcombobox2Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox4Options, setSelectcombobox4Options] = useState<IGRPOptionsProps[]>([]);
  
  
const [showFilters, setShowFilters] = useState<boolean>(undefined);

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
  name={ `button2` }
  variant={ `outline` }
size={ `default` }
showIcon={ true }
iconName={ `SlidersVertical` }
  className={ cn() }
  onClick={ () => {setShowFilters(!showFilters)
} }
  
>
  Filtros
</IGRPButton>
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

{ showFilters === true && (<IGRPCard
  name={ `card1` }
  
  
  
>
  <IGRPCardHeader
  className={ cn() }
  
>
  <IGRPText
  name={ `text1` }
  variant={ `primary` }
weight={ `semibold` }
size={ `lg` }
align={ `left` }
spacing={ `none` }
maxLines={ 3 }
  
  
>
  Filtros
</IGRPText>
</IGRPCardHeader>
  <IGRPCardContent
  className={ cn('space-x-3','space-y-3',) }
  
>
  <div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ',' gap-4',)}    >
	<IGRPCombobox
  name={ `combobox1` }
  label={ `Sector` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ undefined }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectcombobox1Options }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `combobox3` }
  label={ `Ilha` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ undefined }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectcombobox3Options }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `combobox2` }
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
  options={ selectcombobox2Options }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `combobox4` }
  label={ `Ano de Aprovação` }
variant={ `single` }
placeholder={ `Select an option...` }
required={ undefined }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1',) }
  onChange={ () => {} }
  options={ selectcombobox4Options }
>
</IGRPCombobox></div>
  <IGRPText
  name={ `text2` }
  variant={ `primary` }
weight={ `semibold` }
size={ `lg` }
align={ `left` }
spacing={ `normal` }
maxLines={ 3 }
  
  
>
  Filtra ainda por tudo que aconteceu:
</IGRPText>
  <div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ',' gap-4',)}    >
	<IGRPButton
  name={ `button9` }
  variant={ `outline` }
size={ `default` }
showIcon={ false }
  onClick={ () => {} }
  
>
  Hoje
</IGRPButton>
<IGRPButton
  name={ `button5` }
  variant={ `outline` }
size={ `default` }
showIcon={ false }
  onClick={ () => {} }
  
>
  Esta Semana
</IGRPButton>
<IGRPButton
  name={ `button7` }
  variant={ `outline` }
size={ `default` }
showIcon={ false }
  onClick={ () => {} }
  
>
  Este Mês
</IGRPButton>
<IGRPButton
  name={ `button4` }
  variant={ `outline` }
size={ `default` }
showIcon={ false }
  onClick={ () => {} }
  
>
  Este Ano
</IGRPButton>
<IGRPDatePickerRange
  placeholder={ `Periodo Customizado` }
  name={ `datePickerRange1` }
  id={ `datePickerRange1` }
  startDate={ new Date(`1900-01-01`) }
  endDate={ new Date(`2099-12-31`) }
  gridSize={ `full` }
  dateFormat={ `dd/MM/yyyy` }
  onDateChange={ () => {} }
  
  className={ cn() }
/></div>
</IGRPCardContent>
  <IGRPCardFooter
  className={ cn('','flex flex-row flex-nowrap items-center justify-end gap-2',) }
  
>
  <IGRPButton
  name={ `button3` }
  variant={ `outline` }
size={ `default` }
showIcon={ true }
iconName={ `X` }
  className={ cn() }
  onClick={ () => {} }
  
>
  Limpar Filtros
</IGRPButton>
</IGRPCardFooter>
</IGRPCard>)}
<div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ','mt-6',' gap-4',)}    >
	<DashboardCard  title={ `Projetos Ativos` } body={ `291` } icon={ `ChartColumnDecreasing` }   ></DashboardCard>
<DashboardCard  title={ `Investimento Total` } body={ `45.7M` } icon={ `DollarSign` }   ></DashboardCard>
<DashboardCard  title={ `Empregos Criados` } body={ `2846` } icon={ `Users` }   ></DashboardCard>
<DashboardCard  title={ `Taxa de Sucesso` } body={ `87%` } icon={ `TrendingUp` }   ></DashboardCard></div>
<DetailsReport    ></DetailsReport></div></div>
  );
}

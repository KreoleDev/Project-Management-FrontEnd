'use client'

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import ProjectsCard from '@/app/(igrp)/(generated)/project/components/projectscard'
import { IGRPOptionsProps } from "@igrp/igrp-framework-react-design-system";
import { IGRPDataTableFacetedFilterFn , IGRPDataTableDateRangeFilterFn } from "@igrp/igrp-framework-react-design-system";
import { IGRPDataTableHeaderSortToggle, IGRPDataTableHeaderSortDropdown, IGRPDataTableHeaderRowsSelect } from "@igrp/igrp-framework-react-design-system";
import { 
  IGRPPageHeader,
	IGRPButton,
	IGRPInputSearch,
	IGRPCombobox,
	IGRPDataTable,
	IGRPDataTableCellAmount,
	IGRPDataTableCellBadge,
	IGRPDataTableRowAction,
	IGRPDataTableButtonLink 
} from "@igrp/igrp-framework-react-design-system";
import {useProject} from '@/app/(myapp)/hooks/project'
import { useRouter } from "next/navigation"
import { useQueryClient } from '@tanstack/react-query';


export default function PageProjectComponent() {


  
  type Table1 = {
    processNumber: string;
    buiNumber: string;
    projectName: string;
    promoter: string;
    promotingCompany: string;
    sector: string;
    island: string;
    investment: number;
    employment: number;
    status: string;
    id: string;
}

  const [selectcombobox1Options, setSelectcombobox1Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox2Options, setSelectcombobox2Options] = useState<IGRPOptionsProps[]>([]);
  const [selectcombobox3Options, setSelectcombobox3Options] = useState<IGRPOptionsProps[]>([]);
  const [contentTabletable1, setContentTabletable1] = useState<Table1[]>([]);
  
  
const [showFIlters, setShowFIlters] = useState<boolean>(undefined);

const { igrpToast } = useIGRPToast()

function goToNewProject (): void  | undefined {

  router.push("project/new")

}

const {isLoading, error, data} = useProject({sector: "", island: "", status: "", search: ""});

 const router = useRouter()
const queryClient = useQueryClient();

useEffect(() => {
  if(!data || isLoading) return;
  setContentTabletable1(data?.content || [])

},[isLoading, data])




  return (
<div className={ cn('page','space-y-6',)}    >
	<div className={ cn('section',' space-y-6',)}    >
	<IGRPPageHeader
  name={ `pageHeader1` }
  title={ `Projetos` }
  description={ `Gerencie todas as configurações do projecto` }
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
  onClick={ goToNewProject }
  
>
  Novo Projeto
</IGRPButton>
</div>
</IGRPPageHeader>

<div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ',' gap-4',)}    >
	<ProjectsCard  title={ `Total` } count={ `200` }   ></ProjectsCard>
<ProjectsCard  title={ `Em Funcionamento` } count={ `100` }   ></ProjectsCard>
<ProjectsCard  title={ `Em Implementação` } count={ `50` }   ></ProjectsCard>
<ProjectsCard  title={ `Em Financiamento` } count={ `50` }   ></ProjectsCard></div>
<div className={ cn(' rounded-lg border',)}    >
	<div className={ cn('flex','flex flex-row flex-nowrap items-stretch justify-between gap-2','pt-3 pr-3 pb-3 pl-3 px-3 py-3',)}    >
	<IGRPInputSearch
  name={ `inputSearch1` }
  label={ undefined }
showStartIcon={ true }
startIcon={ `Search` }
submitIcon={ `ArrowRight` }
required={ false }
submitButtonLabel={ `Search` }
placeholder={ `pesquisar por nome...` }
  className={ cn('w-full ',) }
  setValueChange={ (value) => '' }
  
>
</IGRPInputSearch>
<IGRPButton
  name={ `button2` }
  variant={ `outline` }
size={ `default` }
showIcon={ true }
iconName={ `SlidersVertical` }
  className={ cn('','flex flex-row flex-nowrap items-stretch justify-start gap-2','mt-2',) }
  onClick={ () => {setShowFIlters(!showFIlters)
} }
  
>
  Filtros
</IGRPButton></div>
{ showFIlters === true && (<div className={ cn()}    >
	<div className={ cn('grid','grid-cols-1 ','md:grid-cols-2 ','lg:grid-cols-4 ','mt-1 pt-3 pr-3 pb-3 pl-3 px-3 py-3',' gap-4',)}    >
	<IGRPCombobox
  name={ `combobox1` }
  label={ `Status do Projeto` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1 ',) }
  onChange={ () => {} }
  options={ selectcombobox1Options }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `combobox2` }
  label={ `Sector` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1 ',) }
  onChange={ () => {} }
  options={ selectcombobox2Options }
>
</IGRPCombobox>
<IGRPCombobox
  name={ `combobox3` }
  label={ `Ilha` }
variant={ `single` }
placeholder={ `Select an option...` }
selectLabel={ `No option found` }
showSearch={ true }
showIcon={ false }
iconName={ `CornerDownRight` }
  className={ cn('col-span-1 ',) }
  onChange={ () => {} }
  options={ selectcombobox3Options }
>
</IGRPCombobox></div>
<div className={ cn('flex','justify-end',)}    >
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
</IGRPButton></div></div>)}</div>
<IGRPDataTable<Table1, Table1>
  showFilter={ true }
  showPagination={ true }
  className={ cn('',) }
  columns={
    [
        {
          header: 'Nº Processo'
,accessorKey: 'processNumber',
          cell: ({ row }) => {
          return row.getValue("processNumber")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Nº BUI'
,accessorKey: 'buiNumber',
          cell: ({ row }) => {
          return row.getValue("buiNumber")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Nome'
,accessorKey: 'projectName',
          cell: ({ row }) => {
          return row.getValue("projectName")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Promotor'
,accessorKey: 'promoter',
          cell: ({ row }) => {
          return row.getValue("promoter")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Empresa'
,accessorKey: 'promotingCompany',
          cell: ({ row }) => {
          return row.getValue("promotingCompany")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Sector'
,accessorKey: 'sector',
          cell: ({ row }) => {
          return row.getValue("sector")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Ilha'
,accessorKey: 'island',
          cell: ({ row }) => {
          return row.getValue("island")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Investimento'
,accessorKey: 'investment',
          cell: ({ row }) => {
          return <IGRPDataTableCellAmount
  field={ row.getValue('investment') }
  currency={ `CVE` }language={ `pt-PT` }formatStyle={ `currency` }>
</IGRPDataTableCellAmount>
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Empregos'
,accessorKey: 'employment',
          cell: ({ row }) => {
          return row.getValue("employment")
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Status'
,accessorKey: 'status',
          cell: ({ row }) => {
          const rowData = row.original;


return <IGRPDataTableCellBadge
  label={ row.original.status }
  variant={ `soft` }
badgeClassName={ `` }
>

</IGRPDataTableCellBadge>
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
        {
          header: 'Ações'
,accessorKey: 'tableActionListCell1',
          enableHiding: false,cell: ({ row }) => {
          const rowData = row.original;

return (
<IGRPDataTableRowAction>
  <IGRPDataTableButtonLink
  labelTrigger={ `View` }
  href={ `/project/${row.original.id}` }
  variant={ `ghost` }
  icon={ `Eye` }
  className={ cn() }
  action={ () => {} }
>
</IGRPDataTableButtonLink>
  <IGRPDataTableButtonLink
  labelTrigger={ `Edit` }
  href={ `/project/${row.original.id}/edit` }
  variant={ `ghost` }
  icon={ `SquarePen` }
  className={ cn() }
  action={ () => {} }
>
</IGRPDataTableButtonLink>
</IGRPDataTableRowAction>
);
          },
          filterFn: IGRPDataTableFacetedFilterFn
        },
]
  }
  clientFilters={
    [
    ]
  }
  
  data={ contentTabletable1 }
/></div></div>
  );
}

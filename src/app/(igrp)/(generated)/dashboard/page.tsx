'use client';

/* THIS FILE WAS GENERATED AUTOMATICALLY BY iGRP STUDIO. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { use, useState, useEffect, useRef } from 'react';
import { cn, useIGRPMenuNavigation, useIGRPToast } from '@igrp/igrp-framework-react-design-system';
import DashboardCard from '@/app/(igrp)/(generated)/dashboard/components/dashboardcard';
import { IGRPBarConfig } from '@igrp/igrp-framework-react-design-system';
import { IGRPPieConfig } from '@igrp/igrp-framework-react-design-system';
import {
  IGRPPageHeader,
  IGRPButton,
  IGRPCard,
  IGRPCardHeader,
  IGRPHeadline,
  IGRPCardContent,
  IGRPHorizontalBarChart,
  IGRPPieChart,
  IGRPCardFooter,
} from '@igrp/igrp-framework-react-design-system';
import { useRouter } from 'next/navigation';

export default function PageDashboardComponent() {
  const { igrpToast } = useIGRPToast();

  const [barsCharthorizontalBarchart1, setBarsCharthorizontalBarchart1] = useState<IGRPBarConfig[]>([{dataKey: 'value', name: 'name'}, {dataKey: 'value', name: 'name'}, {dataKey: 'value', name: 'name'}]);
  const [contentCharthorizontalBarchart1, setContentCharthorizontalBarchart1] = useState<any[]>([{name: 'Project 1', value: 100}, {name: 'Project 2', value: 200}, {name: 'Project 3', value: 300}]);
  const [piesChartpiechart1, setPiesChartpiechart1] = useState<IGRPPieConfig[]>([{dataKey: 'value', name: 'name'}, {dataKey: 'name', name: 'value'}, {dataKey: 'name', name: 'value'}]);
  const [contentChartpiechart1, setContentChartpiechart1] = useState<any[]>([{name: 'Project 1', value: 100}, {name: 'Project 2', value: 200}, {name: 'Project 3', value: 300}]);

  const router = useRouter();

  function goTonewProject(row?: any): void {
    router.push(`/project/new`);
  }

  return (
    <div className={cn('page', 'space-y-6')}>
      <div className={cn('section', ' space-y-6')}>
        <IGRPPageHeader
          name={`pageHeader1`}
          title={`Dashboard`}
          description={`Sistema de Gestão de Projetos`}
          iconBackButton={`ArrowLeft`}
          variant={`h3`}
        >
          <div className="flex items-center gap-2">
            <IGRPButton
              name={`button1`}
              variant={`default`}
              size={`default`}
              showIcon={true}
              iconName={`Plus`}
              className={cn()}
              onClick={() => goTonewProject()}
            >
              Novo Projeto
            </IGRPButton>
          </div>
        </IGRPPageHeader>

        <div className={cn('pt-3 pr-5 pb-3 pl-5 px-5 py-3')}>
          <div
            className={cn('grid', 'grid-cols-1 ', 'md:grid-cols-2 ', 'lg:grid-cols-4 ', ' gap-4')}
          >
            <DashboardCard
              title={`Total de Projetos`}
              body={`1,234`}
              percentage={`+12% `}
            ></DashboardCard>
            <DashboardCard title={`Investimento Total`}></DashboardCard>
            <DashboardCard title={`Empregos Criados`}></DashboardCard>
            <DashboardCard title={`Taxa de Aprovação`}></DashboardCard>
          </div>
          <IGRPCard name={`card1`} className={cn('', 'mt-8')}>
            <IGRPCardHeader className={cn()}>
              <IGRPHeadline
                name={`headline1`}
                title={`Projetos Recentes`}
                description={undefined}
                variant={`h6`}
                roleColor={`solid`}
                color={`primary`}
                showIcon={false}
              ></IGRPHeadline>
            </IGRPCardHeader>
            <IGRPCardContent className={cn('space-x-3', 'space-y-3')}>
              <div className={cn('grid', 'grid-cols-2 ', ' gap-4')}>
                <IGRPHorizontalBarChart
                  categoryKey={``}
                  barRadius={5}
                  barGap={8}
                  barCategoryGap={`30%`}
                  footer={{
                    description: `Chart Data`,
                  }}
                  legendPosition={`bottom`}
                  size={`auto`}
                  valueDomain={[0, 0]}
                  className={cn('col-span-1')}
                  bars={barsCharthorizontalBarchart1}
                  data={contentCharthorizontalBarchart1}
                ></IGRPHorizontalBarChart>
                <IGRPPieChart
                  nameKey={`value`}
                  categoryKey={`value`}
                  footer={{
                    description: `Chart Data`,
                  }}
                  legendPosition={`bottom`}
                  size={`auto`}
                  valueDomain={[0, 0]}
                  className={cn('col-span-1')}
                  pies={piesChartpiechart1}
                  data={contentChartpiechart1}
                ></IGRPPieChart>
              </div>
            </IGRPCardContent>
            <IGRPCardFooter className={cn()}></IGRPCardFooter>
          </IGRPCard>
        </div>
      </div>
    </div>
  );
}

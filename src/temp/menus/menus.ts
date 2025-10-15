import { IGRPMenuItemArgs } from '@igrp/framework-next-types';

export const IGRP_DEFAULT_MENU: IGRPMenuItemArgs[] = [
  {
    id: 43,
    code: 'MEU_MENU_PM',
    name: 'Dashboard',
    type: 'MENU_PAGE',
    position: 0,
    icon: 'AppWindow',
    status: 'ACTIVE',
    target: '_self',
    url: '/dashboard',
    pageSlug: 'dashboard',
    parentCode: null,
    applicationCode: 'APP_IGRP_PM',
    permissions: [],
  },
  
];

import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';
import { Routes }               from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { kwLogin }              from '@kwNgPage/login/kwLogin';
import { kwLogout}              from '@kwNgPage/logout/kwLogout';

import { dwpAct }               from "@dwPage/act/dwpAct";
import { dwpBinder }            from '@dwPage/binder/dwpBinder';
import { dwpClose }             from '@dwPage/close/dwpClose';
import { dwpDash }              from '@dwPage/dash/dwpDash';
import { dwpDeals }             from '@dwPage/deals/dwpDeals';
import { dwpEvent }             from '@dwPage/event/dwpEvent';
import { dwpDil }               from '@dwPage/dil/dwpDil';
import { dwpFeed }              from '@dwPage/feed/dwpFeed';
import { dwpInfo }              from '@dwPage/info/dwpInfo';
import { dwpMttr }              from '@dwPage/mttr/dwpMttr';
import { dwpMsgs }              from '@dwPage/msgs/dwpMsgs';
import { dwpOpts }              from '@dwPage/opts/dwpOpts';
import { dwpPlay }              from '@dwPage/play/dwpPlay';
import { dwpPlayNav }           from '@dwPage/playNav/dwpPlayNav';
import { dwpRoster }            from '@dwPage/roster/dwpRoster';
import { dwpSrch }              from '@dwPage/srch/dwpSrch';
import { dwpStruct}             from '@dwPage/struct/dwpStruct';
import { dwpTasks }             from '@dwPage/tasks/dwpTasks';
import { dwpTerm }              from '@dwPage/term/dwpTerm';
import { dwpWar }               from '@dwPage/war/dwpWar';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        component: kwLogin
    },
    {
        path: 'logout',
        component: kwLogout
    },
    {
        path: 'register',
        loadChildren: 'app/demo/custom-pages/register/register.module#RegisterModule',
    },
    {
        path: 'forgot-password',
        loadChildren: 'app/demo/custom-pages/forgot-password/forgot-password.module#ForgotPasswordModule',
    },
    {
        path: 'apps',
        component: LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'deals'
            },
            {
                path: 'deals',
                component: dwpDeals,
            },
            {
                path: 'matter/:id',
                component: dwpMttr,
                children: [
                    //{
                        //path: '',
                        //pathMatch: 'full',
                        //redirectTo: 'playbook'
                    //},
                    {
                        path: 'playbook',
                        component: dwpPlay,
                        children: [
                            {
                                path: '',
                                pathMatch: 'full',
                                redirectTo: 'activity'
                            },
                            {
                                path: 'activity',
                                component: dwpAct,
                            },
                            {
                                path: 'matter_info',
                                component: dwpInfo,
                            },
                            {
                                path: 'roster',
                                component: dwpRoster,
                            },
                            {
                                path: 'term_sheet',
                                component: dwpTerm,
                            },
                            {
                                path: 'struct_chart',
                                component: dwpStruct,
                            },
                            {
                                path: 'add_event',
                                component: dwpEvent,
                            }
                        ]
                    },
                    {
                        path: 'diligence',
                        component: dwpDil,
                    },
                    {
                        path: 'closing',
                        component: dwpClose,
                    },
                    {
                        path: 'war',
                        component: dwpWar,
                    },
                    {
                        path: 'binder',
                        component: dwpBinder,
                    }

                ]
            },
            {
                path: 'opts',
                component: dwpOpts,
            },
            {
                path: 'playnav',
                component: dwpPlayNav,
            },
            {
                path: 'search',
                component: dwpSrch,
            },
            {
                path: 'messages',
                component: dwpMsgs,
            },
            {
                path: 'feed',
                component: dwpFeed,
            },
            {
                path: 'task_list',
                component: dwpTasks,
            },
            {
                path: 'inbox',
                loadChildren: 'app/demo/apps/inbox/inbox.module#InboxModule',
            },
            {
                path: 'chat',
                loadChildren: 'app/demo/apps/chat/chat.module#ChatModule',
            },
            {
                path: 'calendar',
                loadChildren: 'app/demo/apps/calendar/calendar.module#CalendarAppModule',
            }
        ]
    },
    {
        path: 'components',
        loadChildren: 'app/demo/components/components.module#ComponentsModule',
    },
    {
        path: 'forms/form-elements',
        loadChildren: 'app/demo/forms/form-elements/form-elements.module#FormElementsModule',
    },
    {
        path: 'forms/form-wizard',
        loadChildren: 'app/demo/forms/form-wizard/form-wizard.module#FormWizardModule',
    },
    {
        path: 'icons',
        loadChildren: 'app/demo/icons/icons.module#IconsModule',
    },
    {
        path: 'level1/level2/level3/level4/level5',
        loadChildren: 'app/demo/level5/level5.module#Level5Module',
    },
    {
        path: 'maps/google-maps',
        loadChildren: 'app/demo/maps/google-maps/google-maps.module#GoogleMapsModule',
    },
    {
        path: 'tables/simple-table',
        loadChildren: 'app/demo/tables/simple-table/simple-table.module#SimpleTableModule',
    },
    {
        path: 'tables/all-in-one-table',
        loadChildren: 'app/demo/tables/all-in-one-table/all-in-one-table.module#AllInOneTableModule',
    },
    {
        path: 'drag-and-drop',
        loadChildren: 'app/demo/drag-and-drop/drag-and-drop.module#DragAndDropModule'
    },
    {
        path: 'editor',
        loadChildren: 'app/demo/editor/editor.module#EditorModule',
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

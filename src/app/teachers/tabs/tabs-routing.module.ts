import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)//lazy loading
      },
      {
        path: 'speakers',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },

      {
        path: 'map',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },

      {
        path:'about',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      }

      
   
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

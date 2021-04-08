import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./shared/pages/login/login.module').then( m => m.LoginPageModule)
  }, 
  {
    path: 'student',
    loadChildren: () => import('./students/students.module').then(m=>m.StudentsModule)//
  },
  {
    path:'teachers',
    loadChildren: () => import('./teachers/teachers.module').then(m=>m.TeachersModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

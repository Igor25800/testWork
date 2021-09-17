import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {ErorComponent} from "./components/eror/eror.component";
import {HomeComponent} from "./pages/home/home.component";



const routes: Routes = [
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule)
  },
  {
    path : 'profile',
    component: ProfileComponent
  },
  {
    path : 'error',
    component: ErorComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

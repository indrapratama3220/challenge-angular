import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { PageComponent } from "./components/page.component";


const routes: Routes = [
    {
        path:'',
        component: PageComponent, 
        children: [
            {
                path: '',
                pathMatch:'full',
                loadChildren: () => import('./components/landing/landing.module').then((m) => m.LandingModule), 
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'gold',
                loadChildren: () => import('./components/gold/gold.module').then((m) => m.GoldModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./components/profile/profile.module').then((m) => m.ProfileModule), 
            },
            
        ]
    } 
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class PageRoutingModule {}
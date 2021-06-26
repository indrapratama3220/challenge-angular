import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageComponent } from "./components/page.component";
import { RouteGuard } from "../shared/guards/route.guard";


const routes: Routes = [
    {
        path:'',
        component: PageComponent,
        canActivate:[RouteGuard],
        canActivateChild:[RouteGuard],  
        children: [
            {
                path: '',
                pathMatch:'full',
                loadChildren: () => import('./components/landing/landing.module').then((m) => m.LandingModule), 
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
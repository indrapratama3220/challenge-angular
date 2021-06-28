import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageComponent } from "./components/page.component";
import { RouteGuard } from "../shared/guards/route.guard";
import { ReusablePageModule } from "./components/gold/reusable-page/reusable-page.module";



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
                path: 'reusable',
                loadChildren: () => import('./components/gold/reusable-page/reusable-page.module').then((m) => m.ReusablePageModule),
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
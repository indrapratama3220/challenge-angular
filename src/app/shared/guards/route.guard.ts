import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FlashService } from '../services/flash.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild {

  
    constructor(private readonly router: Router,
                private readonly flashService: FlashService
      ){}
    
    protected authorize(activateRoute: ActivatedRouteSnapshot,
                        activateState: RouterStateSnapshot,
                        
                        ): boolean {
                          
        const credentials = sessionStorage.getItem('id');
  
        if (!credentials) {
          // Ketika tidak ada credentials maka akan diarahkan ke login
          sessionStorage.setItem('redirectBackurl', activateState.url)
          this.flashService.set(activateState.url)
          this.router.navigateByUrl('/login')
        }
  
        return true;
      }
    
    
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
      return this.authorize(route, state);
    }
    canActivateChild(
      childRoute: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
      return this.authorize(childRoute, state);
    }
  
}

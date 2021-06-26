import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild {

  
    constructor(private readonly router: Router){}
    
    protected authorize(activateRoute: ActivatedRouteSnapshot,
      activateState: RouterStateSnapshot): boolean {
        const credentials = sessionStorage.getItem('credentials');
  
        console.log(activateState.url);
        if (!credentials) {
          // Ketika tidak ada credentials maka akan diarahkan ke login
          sessionStorage.setItem('redirectBackurl', activateState.url)
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

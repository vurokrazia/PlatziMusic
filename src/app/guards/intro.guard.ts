import { Injectable } from '@angular/core';
/*CanActivateChild, CanLoad, Route, UrlSegment,*/
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate
// , CanActivateChild, CanLoad
{
  constructor(private storage: Storage, private router: Router) {
  }
  async canActivate() {
    // next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isIntroShowed = await this.storage.get('isIntroShowed');
    if (isIntroShowed) { return isIntroShowed; }
    else { this.router.navigateByUrl('/intro'); }

    // }
    // canActivateChild(
    //   next: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    // canLoad(
    //   route: Route,
    //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    //   return true;
    // }
  }
}
import { Directive } from '@angular/core';
import { Input, HostListener, HostBinding } from '@angular/core';


enum Class {
  navbarScroll = 'bg-white',
  navbarTop = ''
}


@Directive({
  selector: '[appBsNavbarCollapse]'
})
export class BsNavbarCollapseDirective {


  @Input() name: string;

  scrolling: boolean;

  constructor() {
      this.scrolling = false;
      this.name = "";
    }
    

    navbarClass: string = Class.navbarTop;
    
  @HostListener("document:scroll") scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      this.navbarClass = Class.navbarScroll
      
    } else {
      this.navbarClass = Class.navbarTop
    }
  }

  @HostBinding('class') 
  get applyStyles(): string {
    return this.navbarClass
  }
}

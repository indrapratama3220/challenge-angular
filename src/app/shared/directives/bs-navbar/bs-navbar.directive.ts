import { Directive } from '@angular/core';
import { Input, HostListener, HostBinding } from '@angular/core';

enum Position {
  offScroll = 'top: 50px;',
  onScroll = 'top: 0px;',
  position = ''  
}

enum Class {
  navbarScroll = 'navbar navbar-expand-lg navbar-light bg-white mt-0',
  navbarTop = 'navbar navbar-expand-lg navbar-dark bg-transparent text-white mt-5'
}

@Directive({
  selector: '[appBsNavbar]'
})
export class BsNavbarDirective {

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

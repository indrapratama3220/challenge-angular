import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlashService {
    get(): string {
        const message = sessionStorage.getItem('flash');
        sessionStorage.removeItem('flash');
        return message
    }

    set(value: string): void {
        sessionStorage.setItem('flash', value)
    }
}

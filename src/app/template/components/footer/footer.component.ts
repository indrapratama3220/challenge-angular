import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  address = [
    'Jl. Jenderal Gatot Subroto Kav',
    'Jakarta 12190 Indonesia',
    'Telp: 14000, +62-21-52997777',
    'Fax: +62-21-52997735',
    'Email: mandiricare@bankmandiri.co.id',
    'SWIFT Code: BMRIIDJA',
    'Bank Mandiri terdaftar dan diawasi oleh OJK'
  ]

  links = [
    {
      title:'email',
      class:'fas fa-envelope mr-3 text-dark'
    },
    {
      title:'facebook',
      class:'fab fa-facebook mr-3 text-dark'
    },
    {
      title:'twitter',
      class:'fab fa-twitter mr-3 text-dark'
    },
    {
      title:'telegram',
      class:'fab fa-telegram mr-3 text-dark'
    },
    {
      title:'hubungi kami',
      class:'fas fa-book mr-3 text-dark'
    },
    {
      title:'mandiri call 14000',
      class:'fas fa-phone mr-3 text-dark'
    },

  ]
}

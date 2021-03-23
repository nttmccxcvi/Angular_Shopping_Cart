import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.css']
})
export class PromoCodeComponent implements OnInit {
  @Output() onEnterPromo = new EventEmitter();
  code:string;
  constructor() { }

  ngOnInit(): void {
  }

  enterPromo(): void{
    const code = this.code;
    if (code && code.trim() !== '') {
      this.onEnterPromo.emit(code);
    }
  }
}

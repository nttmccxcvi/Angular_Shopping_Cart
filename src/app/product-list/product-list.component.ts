import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() prod;
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateQuantity = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  removeEvent(productId: string):void{
    this.onRemoveProduct.emit(productId);
  }

  updateQuantity(productId: string,quantity : HTMLInputElement):void{
    const value = parseInt(quantity.value);
    if(value <= 0){
      quantity.value = "1";
    }
    if(value > 99){
      quantity.value ="99";
    }
    this.onUpdateQuantity.emit({productId,quantity : parseInt(quantity.value)});
  }


}

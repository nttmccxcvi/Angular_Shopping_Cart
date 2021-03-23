import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[]= [
    {
      id:'1',
      name : 'PRODUCT ITEM NUMBER 1',
      description:'Description for product item number 1',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 5.99,
      unit: 2
    },
    {
      id:'2',
      name : 'PRODUCT ITEM NUMBER 2',
      description:'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price:  9.99,
      unit: 2,
    },
    {
      id:'3',
      name : 'PRODUCT ITEM NUMBER 3',
      description:'Description for product item number 3',
      thumbnail: 'https://via.placeholder.com/200x150',
      price:  15.99,
      unit: 5,
    }
  ];

  codes : string[] =["SUMMER", "WINTER"];

  numberItems:number = this.totalProduct();
  totalPrice: number = this.subTotal();
  discount: number =0;
  totalProduct():number {
    var res =0;
    for (let index = 0; index < this.products.length; index++) {
      res += this.products[index].unit;
    }
    return res;
  }

  subTotal() : number {
    var res= 0;
    for (let index = 0; index < this.products.length; index++) {
      res += this.products[index].price * this.products[index].unit;
    }
    return res
  }

  removeProduct(productId:string){
    const index = this.products.findIndex(product => product.id == productId);
    this.products.splice(index,1);
    this.numberItems = this.totalProduct();
    this.totalPrice = this.subTotal();
  }

  updateQuantity(product:{productId, quantity}){
    var product1 = this.products.find(p=>p.id == product.productId);

    product1.unit = product.quantity;
    console.log(product1.unit);
    this.numberItems = this.totalProduct();
    this.totalPrice = this.subTotal();
  }

  enterPromo(code:string):void{
    if(!this.codes.includes(code)){
      alert('Promo code is not valid');
    }
    else {
      if(code == "WINTER"){
        alert('10% discount');
        this.discount = 10;
      }
      else {
        alert('20% discount');
        this.discount = 20;
      }
    }
  }

}

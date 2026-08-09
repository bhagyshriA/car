import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Iproduct } from "../../model/product.component";
import { products } from '../../const/product.component';

@Component({
  selector: 'app-product', 
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productArray: Array<Iproduct> = products;

  @ViewChild('input') input!: ElementRef;

 
  selectedCarName: string | null = null;
  productCount: number = 0;
  productMsg: string = "No Product";

  constructor() {}

  ngOnInit(): void {}


  productAdd(pname: string) {
    this.selectedCarName = pname;
    this.productCount = 1;
    this.productMsg = `${pname} added to cart.`;
  }


  productRemove(pname: string) {
    if (this.selectedCarName === pname) {
      this.selectedCarName = null;
      this.productCount = 0;
      this.productMsg = "No Product";
    }
  }

  inputValue: string = "";
  onproductSearch() {
    if (this.input) {
      this.inputValue = this.input.nativeElement.value;
    }
  }
}
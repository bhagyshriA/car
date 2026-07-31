import { Component } from '@angular/core';
import { products } from './const/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'car';
  productArr= products
}

import { Injectable } from '@angular/core';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    new Product('AA01', 'Milk', 1350, 'Lactose-free semi-skimmed milk 200 ml', 'https://images.unsplash.com/photo-1563636619-e9107da5a76a?auto=format&fit=crop&w=400&q=80'),
    new Product('AB95', 'Eggs', 880, 'Fresh farm eggs - Box of 12', 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=400&q=80'),
    new Product('CF345', 'Pasta', 720, 'Premium durum wheat pasta 500g', 'https://images.unsplash.com/photo-1551462147-3a900cad74aa?auto=format&fit=crop&w=400&q=80'),
    new Product('JI76', 'Quinoa', 1780, 'Organic white quinoa seeds',
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80'),
    new Product('GH45', 'Raspberry Jelly', 100, 'Sweet fruit jelly dessert', 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=400&q=80'),
    new Product('ZD37', 'Cereal', 3500, 'Whole grain breakfast cereal',
      'https://images.unsplash.com/photo-1521483451569-e33803c0330c?auto=format&fit=crop&w=400&q=80')
  ];

  cart = {
    AA01: 1,
    AB95: 2,
    ZD37: 5,
    GH45: 3,
  };

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(code: string): Product {
    return this.products.find(p => p.code === code.toUpperCase());
  }

  getCart(): {} {
    return this.cart;
  }

  addToCart(code: string): void {
    if (this.cart[code]) {
      this.cart[code]++;
    } else {
      this.cart[code] = 1;
    }
  }


}

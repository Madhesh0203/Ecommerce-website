import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  filtered: Product[];
  productName = '';
  editMode = false;
  editId = -1;
  editCode = '';

  form = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]),
    url: new FormControl('')
  });


  constructor(private db: ProductsService) { }

  ngOnInit(): void {
    this.products = this.db.getProducts();
    this.filtered = this.products;
  }

  get code() { return this.form.get('code'); }
  get name() { return this.form.get('name'); }
  get price() { return this.form.get('price'); }
  get description() { return this.form.get('description'); }

  // CRUD Products

  addProduct(): void {
    if (this.form.valid) {
      const { code, name, price, description, url } = this.form.value;
      this.products.push(new Product(code, name, price, description, url));
      this.form.reset();
    } else { alert("The data entered is not valid"); }
  }

  turnEditMode(): void {
    if (this.editId > -1) {
      const { code, name, price, description, url } = this.products[this.editId];
      this.form.setValue({ code, name, price, description, url });
      this.editMode = true;
    }
  }

  editProduct(): void {
    if (this.editId > -1) {
      const { code, name, price, description, url } = this.form.value;
      this.products[this.editId] = new Product(code, name, price, description, url);
      this.editMode = false;
      this.form.reset();
      alert('Changes applied successfully!');
    }
  }

  removeProduct(): void {
    this.findByCode();
    if (this.editId > -1) {
      const product = this.products[this.editId];
      this.products.splice(this.editId, 1);
      alert(`Product ${product.name} with code ${product.code} has been deleted.`);
    }
    this.form.reset();
    this.editCode = '';
  }

  findByCode(): void {
    this.editCode = this.editCode.toUpperCase();
    let idx = -1;
    const productExists = this.db.getProduct(this.editCode);
    if (productExists) {
      idx = this.products.indexOf(productExists);
    }
    this.editId = idx;
  }

  searchByName(): void {
    if (!this.productName.trim()) {
      this.filtered = this.products;
    } else {
      this.filtered = this.products.filter(p =>
        p.name.toLowerCase().indexOf(this.productName.toLowerCase()) > -1);
    }
  }

  searchByCode(): void {
    this.filtered = this.products.filter(p => p.code === this.editCode);
    this.findByCode();
  }

  addToCart(code: string): void {
    this.db.addToCart(code);
    alert('Experience added to cart successfully!');
  }

}

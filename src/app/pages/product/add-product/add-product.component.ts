import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  formProduct!: FormGroup;

  product!: Product;

  constructor(public productService: ProductService){
  }

  ngOnInit(): void {
    this.formProduct = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(null),
      weight: new FormControl(null),
      description: new FormControl(null),
    });
  }

  Add(){
    this.product = this.formProduct.value;
    this.productService.Add(this.product).subscribe((response: Product) => {
      console.log(response);
    });
  }
}

import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


const ProductColumns = [
  {
    key: "name",
    type: "text",
    label: "Nome"
  },
  {
    key: "weight",
    type: "text",
    label: "Peso"
  },
  {
    key: "Description",
    type: "text",
    label: "Descrição"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  },
]

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  displayedColumns: string[] = ProductColumns.map((col) => col.key);
  dataSource = new MatTableDataSource<Product>();
  columnsSchema: any = ProductColumns;

  product!: Product[];

  constructor(public productService: ProductService) {
    this.product = {} as Product[];
  }

  ngOnInit(): void {
    debugger
    this.productService.GetAll().subscribe((response: any) => {
      this.dataSource.data = response
      console.log(this.dataSource.data);
    });
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (u: Product) => u.id !== id
      );
    });
  }
}

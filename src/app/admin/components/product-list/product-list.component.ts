import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/service/products/products.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = []
  displayedColumns: string[] = ['id', 'title', 'price', 'actions' ]

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts(){
    this.productsService.getAllProducts()
      .subscribe(products =>{
        this.products = products
      })
  }

  deleteProduct(id: string){
    console.log(this.products)
    this.productsService.deleteProduct(id)
      .subscribe( response => {
        if (response){
          const idx = this.products.findIndex(product => product.id === id)
          this.products.splice(idx, 1)
          this.products = [...this.products]
        }
      })
  }
}

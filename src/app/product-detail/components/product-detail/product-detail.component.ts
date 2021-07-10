import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/service/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }



  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id
      this.fetchProduct(id)
    })
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
      .subscribe(product =>{
        this.product = product
      })
  }

  createNewProduct(){
    const newProduct: Product = {
      id: '2323',
      title: 'nuevoo desde Angular',
      image: 'https://i.imgur.com/mZhjVqk.png',
      price: 2000,
      description: 'Goku super sayayin'
    }
    this.productsService.createProduct(newProduct)
      .subscribe(product =>{
        console.log(product)
      })
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      title: 'Producto editado',
      price: 2352300,
      description: 'Goku super sayayin ataque'
    }
    this.productsService.updateProduct('2323', updateProduct)
      .subscribe(product =>{
        console.log(product)
      })
  }

  deleteProduct(){
    this.productsService.deleteProduct('2323')
      .subscribe(product => {
        console.log(product)
      })
  }

}

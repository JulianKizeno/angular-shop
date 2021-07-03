import { Injectable } from '@angular/core';
import { Product } from "../../../product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'https://i.imgur.com/iD7mM2A.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'https://i.imgur.com/Jv8Uay3.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'https://i.imgur.com/b4L0ojE.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'https://i.imgur.com/S8HzX9S.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'https://i.imgur.com/EGNKsnP.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'https://i.imgur.com/Abu9Ji7.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '7',
      image: 'https://i.imgur.com/3BTKRS2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '8',
      image: 'https://i.imgur.com/QlUCBXZ.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '9',
      image: 'https://i.imgur.com/AZZhMEz.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '10',
      image: 'https://i.imgur.com/bGn454v.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '11',
      image: 'https://i.imgur.com/t9uBX7j.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '12',
      image: 'https://i.imgur.com/mTwCb21.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '13',
      image: 'https://i.imgur.com/XHpjH7y.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '14',
      image: 'https://i.imgur.com/8w4VDYb.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '15',
      image: 'https://i.imgur.com/YSXQDmF.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '16',
      image: 'https://i.imgur.com/77lPslw.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '17',
      image: 'https://i.imgur.com/GeUWP2D.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '18',
      image: 'https://i.imgur.com/g3j9YNs.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '19',
      image: 'https://i.imgur.com/UrPW0vI.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '20',
      image: 'https://i.imgur.com/9XFlupW.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '21',
      image: 'https://i.imgur.com/srVqI8Y.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '22',
      image: 'https://i.imgur.com/izGjZ0W.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '23',
      image: 'https://i.imgur.com/6Kw7gyF.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  constructor() { }

  getAllProducts() {
    return this.products
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id)
  }
}

// decoradores
import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    OnDestroy} from '@angular/core';
import { Product } from '../../../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnChanges, OnInit, OnDestroy{

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(){
        console.log('1.Constructor');
    }

    addToCart(){
        console.log('Producto Añadido');
        this.productClicked.emit(this.product.id);
    }

    ngOnChanges(changes: SimpleChanges){
        console.log('2.NgOnChanges');
        console.log(changes);
    }

    ngOnInit(){
        console.log('3.NgOnInit');
    }

    // ngDoCheck(){
    //     console.log('4.NgDoCheck')
    // }

    ngOnDestroy(){
        console.log('5.NgOnDestroy');
    }

}
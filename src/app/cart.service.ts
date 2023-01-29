import {HttpClient} from '@angular/common/http';
import {Product} from './products';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private http: HttpClient) {
    }

    items: Product[] = [];

    addToCart(product: Product) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    removeFromCart(product: Product) {
        const index = this.items.indexOf(product);
        this.items.splice(index, 1);
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }

    getShippingPrices() {
        return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
    }
}

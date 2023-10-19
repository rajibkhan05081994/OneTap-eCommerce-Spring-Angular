import { Product } from "./product";

export class Cart {
    cart_id?: any;
    customer_id?: any;
    product_id?: any;
    product_name?: any;
    product_brand?: any;
    product_price?: any;
    Product_quantity?: any;
    Product_discount?: any;
    total_product_price?: any;
    product_img?:any;
    constructor(cart_id: any, customer_id: any, product_id: any, product_name: any, product_brand: any, product_price: any,
        Product_quantity: any, Product_discount: any, total_product_price: any,product_img:any) {
        this.cart_id = cart_id;
        this.customer_id = customer_id;
        this.product_id = product_id;
        this.product_name=product_name;
        this.product_brand=product_brand;
        this.product_price=product_price;
        this.Product_quantity=Product_quantity;
        this.Product_discount=Product_discount;
        this.total_product_price=total_product_price;
        this.product_img=product_img;

    }

}

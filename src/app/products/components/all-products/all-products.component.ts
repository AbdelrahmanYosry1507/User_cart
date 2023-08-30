import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { CartService } from 'src/app/carts/service/cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  productArr:any;
  categoryArr:any;
  Localcart:any;
  constructor(private service:ProductsService ,private cartService :CartService){

  }
  Addtocart(item:any){
    this.cartService.addtoCart(item);

  }










  ngOnInit(){
    this.getProducts();
    this.getCategories();
}

  getProducts(){
    return this.service.getAllProducts().subscribe(x=>{
      this.productArr = x;
    }

    ,error=>{
      alert("error");
    })
  }


  getCategories(){
    return this.service.getAllCategories().subscribe(x=>{
      this.categoryArr = x;
    }
    ,error=>{
      alert("error");
    })
  }


  filterCategory(event:any){
    let value = event.target.value;
    console.log(value);
    if(value=="All"){
      this.getProducts();
    }
    else{
      this.service.getAllCategoriesBycategory(value).subscribe(x=>{
        this.productArr = x;
      })
    }

    console.log("ssss");
  }

  Add(event:any){
    console.log(event);
  }
}

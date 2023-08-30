import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  userName: string = '1';
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.productList.asObservable();
  }
  checksucess(){
    this.userName='2';
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }














  getalldate(){
   return this.http.get('https://fakestoreapi.com/products')
  }
  deleteOneData(id:any){
  return  this.http.delete('https://fakestoreapi.com/products/'+id)
  }
  UpdateOneData(id:any,newdata:any){
    return  this.http.put('https://fakestoreapi.com/products/'+id,newdata);
    }
}

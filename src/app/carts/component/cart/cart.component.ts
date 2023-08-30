import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  showElement: boolean = true;
  public products : any = [];
  public grandTotal !: number;
  public cartitem:any;



  constructor (private abdoSe: CartService, private route: Router){
  }

check(){
this.showElement =false;
console.log(this.showElement);

}


  getAllSelected(){
    this.abdoSe.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.abdoSe.getTotalPrice();
      this.cartitem=this.abdoSe.getTotalPrice();
    })
  }

  routeTo()
{
  this.route.navigate(['/products'])
}
  removeItem(item: any){
    this.abdoSe.removeCartItem(item);
  }
  emptycart(){
    this.abdoSe.removeAllCart();
  }




  ngOnInit(): void {
    this.getAllSelected();
this.getFunction();

const stringValue = this.cartitem;
const numericValue = parseInt(stringValue, 10);

if (!isNaN(numericValue)) {
    console.log("Converted value:", numericValue);
} else {
    console.log("Conversion failed");
}


  }
arr:any;
arr1:any;
arr2:any;
  getFunction(){
    this.abdoSe.getalldate().subscribe(x=>{
      console.log(x);

this.arr = x;
    })
  }
  deleteFunction(id:any){
    this.abdoSe.deleteOneData(id).subscribe(x => {
      this.arr1 = x;
      console.log(this.arr1.id)
      console.log("helooooo");

    })
  }

newdata={
  id:11,
  name: 'khloud',
    password: 123,
    lastname: 'rammah'
}
category=[{id:0,name: 'category'},
{id:1,name: "men's clothing"},
{id:2,name: 'jewelery'},
{id:3,name: 'electronics'},
{id:4,name: "women's clothing"},
]


  UpdateOneData(id:any){
   this.abdoSe.UpdateOneData(id,this.newdata).subscribe((x): void=>{

    this.arr2=x;
    console.log(this.arr2);
    x= this.newdata.id;
    console.log(x);

    console.log("tmam");


   })
    }
  title = 'LastSession';




}

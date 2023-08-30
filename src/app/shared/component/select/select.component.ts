import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit{
  title1:String='category';
  categoryArr:any;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  filterCategory(event:any){

  }

}

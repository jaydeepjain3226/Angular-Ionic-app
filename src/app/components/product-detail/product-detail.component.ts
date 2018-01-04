import { Router } from '@angular/router';
import { SearchService } from './../../services/search/search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private sub:any
  id:number
  detail: any;
  recommended: Array<Object> = [];
  cast: Array<Object> = [];
  inWatchList: boolean = true;

 constructor(
    private router: Router,
    private searchService: SearchService,
    private route:ActivatedRoute 
 ) { }


  public getDetail(skuid:number){
    console.log("invoked get detail method:" + skuid);
    this.searchService.productDetails(skuid).subscribe(response => {
      console.log(response.json());
      this.searchService.sharedSearchResult = response;
      this.detail=response.json().products[0];     
    });

  }

  ngOnInit() {
   this.sub = this.route.params.subscribe(params => {
      this.id = +params['sku']; // (+) converts string 'id' to a number
      console.log(this.id);
      this.getDetail(this.id);
    });
  }

}

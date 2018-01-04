import { Router } from '@angular/router';
import { SearchService } from './../../services/search/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   popularProducts:any
   trendingProducts:any
   constructor(private searchService:SearchService,private router:Router) { }

  ngOnInit() {

   this.searchService.mostPopularProducts().subscribe(response => {
      console.log('MostPopularProducts');
      console.log(response.json());
      this.popularProducts=response.json().results;
      let popularProductsLength=this.popularProducts.length; 
      console.log("length:"+ popularProductsLength);
},
   this.searchService.trendingProducts().subscribe(response => {
      console.log('MostTrendingProducts');
      console.log(response.json());
      this.trendingProducts=response.json().results;
      let trendingProductsLength=this.trendingProducts.length;
      console.log("length:"+ trendingProductsLength);
      console.log(this.trendingProducts[1].images.standard);
   }

  }

  goToDetail(sku:any){  
    console.log("Get to detail",sku);
   // let link = ['/productdetail',sku];
   console.log("routing to product details");
    this.router.navigate(['/productdetail',sku]);
   console.log("routed");  
}
}
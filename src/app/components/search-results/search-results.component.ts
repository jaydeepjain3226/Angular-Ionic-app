import { Router } from '@angular/router';
import { SearchService } from './../../services/search/search.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
result:any;
 constructor(private searchService:SearchService,private router:Router) { }

  ngOnInit() {
  }

  goToDetail(sku:any){  
    console.log("Get to detail",sku);
   // let link = ['/productdetail',sku];
   console.log("routing to product details");
    this.router.navigate(['/productdetail',sku]);
   console.log("routed");  
}

}

import { Router } from '@angular/router';
import { SearchService } from './../../services/search/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private searchService:SearchService,private router:Router) { }
// dasfl
  private searchQuery: string;
  navigateTo(){
    let link = ['/search-results'];
    console.log("Navigating to Search Result Component",link);
    this.router.navigate(link);
  }

  public search() {
    console.log('searchProducts: ' + this.searchQuery)
    this.searchService.searchProducts(this.searchQuery).subscribe(response => {
      console.log('sharedSearchProducts');
      // console.log(response.json());
      //this.searchService.sharedSearchResult = response.results;
      this.navigateTo();
    });
  }
  
  ngOnInit() {
    console.log("Search Component invoked.");
  }

}

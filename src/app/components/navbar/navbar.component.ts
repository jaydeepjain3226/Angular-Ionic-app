import { ModalComponent } from './../modal/modal.component';
import { Router } from '@angular/router';
import { SearchService } from './../../services/search/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private searchService:SearchService,private router:Router) { }
   private searchQuery:string
   navigateTo(){
    let link = ['/search-results'];
    console.log("Navigating to Search Result Component",link);
    this.router.navigate(link);
    console.log("routed");
  }

  public search() {
    console.log('searchProducts: ' + this.searchQuery)
    this.searchService.searchProducts(this.searchQuery).subscribe(response => {
      console.log('sharedSearchProducts');
      console.log(response.json());
      this.searchService.sharedSearchResult = response;
      this.navigateTo();
    });
  }
  
  ngOnInit() {
    console.log("Search Component invoked.");
  }
}

import { SearchResultsComponent } from './../../components/search-results/search-results.component';

import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SearchService {
data:any
constructor(private http:Http) { }

  // Variable links
  public sharedSearchResult: any;
  private baseURL = "https://api.bestbuy.com/v1/products";
  private apiKey = "?apiKey=fslFEnhSFaA5IXN6JNod6qRK";
  private responseFormat = "&format=json";
  private trendingProductsApi="https://api.bestbuy.com/beta/products/trendingViewed?apiKey=fslFEnhSFaA5IXN6JNod6qRK";
  private popularProductsApi="https://api.bestbuy.com/beta/products/mostViewed?apiKey=fslFEnhSFaA5IXN6JNod6qRK";
  private headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
 

public searchProducts(term: string) 
{
    const url = `${this.baseURL}((search=${term}))${this.apiKey}${this.responseFormat}`;
    console.log(url);
    return this.http.get(url);//.map((res: Response) => {this.data = res.json()});
   // console.log(this.data);
    // console.log(this.http.get(url).map(results => results.json()));
    //return(this.data);
    
  }

  public productDetails(sku:number){
   const url = `${this.baseURL}((sku=${sku}))${this.apiKey}${this.responseFormat}`
   return this.http.get(url);
  }

  public trendingProducts(){
    const url=`${this.trendingProductsApi}`;
    console.log("trending-url:"+ url);
    return this.http.get(url);
  }

  public mostPopularProducts(){
    const url=`${this.popularProductsApi}`;
    console.log("popular-products-url:"+ url);
    return this.http.get(url);
  }
}

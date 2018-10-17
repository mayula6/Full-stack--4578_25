import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jsonp, Http } from '@angular/http'; //use jsonp module to fetch the data from the api call


@Injectable()
export class HeroService {
  constructor(
    private myHttp: HttpClient,
  ) { }
  
  getFlickrFeed() {
    const url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSONP_CALLBACK';
    return this.myHttp.jsonp(url, 'JSONP_CALLBACK').pipe(
                data => data
        );
}

}




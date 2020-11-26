import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  private key = 'rB1W3CTZYi5ZwMUAaWvvJjLDN2itQ1Gz'
  private limit = '10'
  private link = 'http://api.giphy.com/v1/gifs/search'

getPhoto(i) {
  let link = `${this.link}?api_key=${this.key}&q=${i}&limit=${this.limit}`;
  console.log(link);
  
  return this.http.get(link);
}

}



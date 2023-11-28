import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TwitterService {
  
  private apiUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

  constructor(private http: HttpClient) {}

  getTweets(username: string): Observable<any[]> {
    // Lógica para hacer la llamada a la API de Twitter y obtener los tweets
    // ...

    return this.http.get<any[]>(`${this.apiUrl}?screen_name=${username}`);
  }
}

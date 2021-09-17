import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {INews} from "../../interfaces/news";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private key = environment.NP_KEY;
  private url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = `https://newsapi.org/v2/everything?q=Apple&from=2021-09-15&sortBy=popularity&apiKey=${this.key}`
  }

  getNews(): Observable<Array<INews>> {
    return this.http.get<Array<INews>>(this.url).pipe(map((data: any) => data.articles)
    )
  }

}

import {Component, OnInit} from '@angular/core';
import {INews} from "../../shared/interfaces/news";
import {NewsService} from "../../shared/services/news/news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  arrNew: Array<INews> = [];

  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.getNews()
  }

  getNews(): void {
    this.newsService.getNews().subscribe(res => {
      this.arrNew = res
    })
  }
}

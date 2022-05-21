import { Component, OnInit } from '@angular/core';
import { articleModel } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles:articleModel[];
  constructor(private proSer:ArticleService) { }

  ngOnInit(): void {
    this.proSer.AllArticles.subscribe((res:any)=>{
      this.articles=res
      console.log(this.articles);
    });
  }

  
}

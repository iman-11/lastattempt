import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { articleModel } from "../models/article.model";

@Injectable({
    providedIn: 'root'
})

export class ArticleService {
    AllArticles=new BehaviorSubject <articleModel[]>(null);
    constructor(private http:HttpClient){
        this.getFromDb("");
    }
    private baseUrl="http://localhost:8000/api/";

    public add(form){
        return this.http.post(this.baseUrl+"add",form);
    }

    public delete(id){
        return this.http.post(this.baseUrl+"delete?id="+id,null);
    }

    public getFromDb(keys){
        return this.http.post(this.baseUrl+"show?keys="+keys,null).subscribe((res:any)=>{
            var r :any=res;
            this.AllArticles.next(r.articles);
        })
    }

    public update(form){
        return this.http.post(this.baseUrl+"update",form);
    }
}


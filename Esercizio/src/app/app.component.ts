import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
// import { env } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Esercizio';

  constructor(private http:HttpClient, private as:AuthService) {}

  posts:any[] = []

  api = "https://esercizio-40ce8-default-rtdb.europe-west1.firebasedatabase.app/"

  ngOnInit() {
    this.http.get<any[]>(this.api+"/posts.json").subscribe((res)=>{
      this.posts = res
    })
  }

  login(){
    this.as.login("flaviofm99@gmail.com", "test1").then(res=>{})
  }
  signup(){
    this.as.register("flaviofm99@gmail.com", "test1", "Flavio").then((res)=>{})
  }
}

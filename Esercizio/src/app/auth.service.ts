import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginSubj = new BehaviorSubject<any>(null)

  auth = getAuth()

  constructor() { }

  register(email:string, password:string, name:string) {
    return createUserWithEmailAndPassword(this.auth, email, password).then((res:any)=>{
      console.log(res);
      // this.loginSubj.next()
    })
  }

  login(email:string, password:string) {
    return signInWithEmailAndPassword(this.auth, email, password).then((res:any)=>{
      console.log(res);
      this.loginSubj.next(res)
    })
  }
}

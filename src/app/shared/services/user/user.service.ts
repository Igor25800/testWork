import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {IUser} from "../../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private firestore: AngularFirestore
  ) {}

  getUser(): Observable<Array<IUser>> {
      return  this.firestore.collection<IUser>('user').valueChanges();
  }
}

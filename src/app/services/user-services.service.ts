import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
// Import RxJs required methods


@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

   private url = "http://localhost:8012/face44/";
   private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'jwt-token'
    })
  };
  constructor(private http: HttpClient) { }


  addUser(obj){
    return this.http.post(this.url + 'create/index.php', obj,this.httpOptions);
    }

    getAllUser(){
      return this.http.get(this.url + 'read/index.php',this.httpOptions);
      }
    deleteuser(id){
      return this.http.delete(this.url + 'Delete/index.php?id=' + id, this.httpOptions)
    }  
    updateuser(obj){
      return this.http.put(this.url + 'update/index.php',obj, this.httpOptions)
    }

    getUserById(id){
      return this.http.get(this.url + 'read_one/read_one.php?id=' + id,this.httpOptions);
      }
}

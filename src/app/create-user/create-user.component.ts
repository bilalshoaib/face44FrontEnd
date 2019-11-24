import { Component, OnInit } from '@angular/core';
import { UserServicesService} from '../services/user-services.service';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { debug } from 'util';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public id: Number;
  public name: string;
  public email: string;
  public address: string;
  public phone: string;
  public message : String;
  constructor(private service:  UserServicesService, private rout: Router, 
    private activatedRoute: ActivatedRoute,
    private roastr: ToastrService) {
      this.activatedRoute.params.subscribe(params => {
        
        this.id = params.id;
      });
     }

  ngOnInit() {
     if(this.id) {
          this.getSingleUser();
        }
  }
  validation(){
    if(this.name == null || this.name == ''){
      this.roastr.warning("Name: ", "Name required" );
      return false;
    }
    if(this.email == null || this.email == ''){
      this.roastr.warning("Email: ", "Email required" );
      return false;
    }
    if(this.address == null || this.address == ''){
      this.roastr.warning("Address: ", "Address required" );
      return false;
    }
    if(this.phone == null || this.phone == ''){
      this.roastr.warning("phone: ", "phone required" );
      return false;
    }
    return true;
  }
  addUser(){
    this.message = '';
    if(this.validation()){
   if(this.id) {
    const obj = {
      id: this.id,
      name: this.name,
      email: this.email,
      address: this.address,
      phone: this.phone
      }
     this.updateUser(obj);
   } else {
    const obj = {
      name: this.name,
      email: this.email,
      address: this.address,
      phone: this.phone
      }
     this.saveUser(obj);
    }
   }

  }

  saveUser(obj) {
    this.service.addUser(obj).subscribe(
      (data: any)=>{
        console.log(data);
        this.name = '';
        this.email = '';
        this.address = '';
        this.phone = '';
        this.message = data.message;
        this.rout.navigate(['/'])
        this.roastr.success('user created')

      },
      (error)=>{
        console.log(error);
      }
    );
  }

  updateUser(obj) {
    this.service.updateuser(obj).subscribe(
      (data: any)=>{
        this.name = '';
        this.email = '';
        this.address = '';
        this.phone = '';
        this.message = data.message;
        this.rout.navigate(['/'])
        this.roastr.success('user updated')

      },
      (error)=>{
        console.log('error block');
        console.log(error);
      }
    );
  }
  getSingleUser() {
    if (this.id != null) {
      this.service.getUserById(this.id).subscribe(
        (data: any) => {
          this.name = data.name;
          this.address = data.address;
          this.phone = data.phone;
          this.email = data.email;
        }, (error) => {

        }
      );
    }
  }
}

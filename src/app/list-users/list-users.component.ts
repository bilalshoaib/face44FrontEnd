import { Component, OnInit } from '@angular/core';
import { UserServicesService} from '../services/user-services.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public loader: boolean;
  public users = [];
  // public id: number;
  public message: string;
  constructor(private service:  UserServicesService, private rout: Router,
    private toastr: ToastrService) { 
    this.loader = false;
  }

  ngOnInit() {
  
    this.getUsers();
  }

  getUsers() {
    this.loader =true;
    this.service.getAllUser().subscribe(
      (data:any) => {
this.users = data.records;
this.loader = false;
      }, 
      (error) => {

      }
    );
  }
  delete(id){
    this.loader =true;
    this.message = '';
    this.service.deleteuser(id).subscribe(  
      (data: any)=>{
        console.log(data);
        this.message = data.message;
        this.getUsers();
        this.toastr.success("user deleted")
        

      },
      (error)=>{
        console.log(error);
      }
    );
}
edit(id){
  this.rout.navigate(['/updateUser',id])
  console.log(id)
}
}

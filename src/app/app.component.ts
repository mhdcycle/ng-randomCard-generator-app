import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any
  title = 'random-card';
  constructor(private toastr: ToastrService, private userService: UserService){}
  ngOnInit(){
    this.userService.getUser().subscribe(
      (user: any)=>{
        console.log(this.user);
        this.user= user.results[0];
      },
      (err)=>{
        this.toastr.error(err.status,"OOps");
      }
    );
  }
  onReload(){
    return this.ngOnInit();
  }
}

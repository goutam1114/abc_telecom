import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router:Router) { }
  public x:string="goutam@gmail.com";

  ngOnInit(): void {
  }
  public onSubmit(){
    this.router.navigateByUrl("/customer");
   
    


  }
  }



import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/core/service/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  private user: User;
  //regrouper un ensemble de formulaire et pouvoir le soumetre a la fois
  public userForm:FormGroup;
  constructor(private userService: UserServiceService, private router: Router){}
  ngOnInit(): void {
    this.userForm= new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password:  new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
    
  }

  handleSubmit(){
    let email = this.userForm.value.email;
    let password = this.userForm.value.password;
    //let user = new User(email, password);
    //ici on souscrire d'abord a l'observable avant de gerer ses valeur de retour;
    this.userService.login(email, password).subscribe({
      next: (response)=> { localStorage.setItem("user", response); this.router.navigateByUrl('/')},
      error: (error) => { alert("connexion echoue.")}
    })
  }
}

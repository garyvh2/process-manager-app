import { ConnService } from './../../../../shared/providers/database.service';
import { User } from './../../../../models/User';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ConnServ: ConnService) { }

  ngOnInit() {
  }

  loginFunc() {
    const userName = $('#userName').val();
    const password = $('#password').val();
    if (!this.isValid(userName, password)) {
      alert('Complete los campos requeridos');
      return;
    }
    this.sendRequest(userName, password);
    console.log('Jose');
  }

  isValid(userName, password) {
    return userName !== '' && password !== '';
  }

  sendRequest(userName, password) {
    this.ConnServ.create<User>({
      endpoint: 'users/authenticateUser',
      obj: {
        userEmail: userName,
        userPassword: password
      }
    }).subscribe(
      data => {
        this.saveInLocalStorage(data);
      },
      error => {
        alert(error.error.message);
      }
    );
  }

  saveInLocalStorage(obj) {
    localStorage.setItem('UserLogged', JSON.stringify(obj));
    window.location.href = '/Process/List';
  }

}

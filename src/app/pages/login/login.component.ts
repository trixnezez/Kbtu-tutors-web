import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private auth: AuthService) { }

  ngOnInit(): void { }

  login(): void {
    this.auth.login(this.email, this.password)
      .toPromise()
      .then(_ => console.log('Успешный вход'))
      .catch(_ => alert('Эта функция еще не имплементирована'));
  }

}

import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  email: string = "";
  password1: string = "";
  password2: string = "";

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  signUp() {
    if (this.password1 !== this.password2) {
      return alert("Пароли не совпадают");
    }

    if (this.password1.length < 8) {
      return alert("Пароль должен составлять не менее 8 символов");
    }

    this.auth.signUp(this.email, this.password1).toPromise().then(_ => console.log('Успешный вход'))
      .catch(_ => alert('Эта функция еще не имплементирована'));
  }

}

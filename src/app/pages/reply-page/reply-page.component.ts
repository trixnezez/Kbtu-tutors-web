import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reply-page',
  templateUrl: './reply-page.component.html',
  styleUrls: ['./reply-page.component.scss']
})
export class ReplyPageComponent implements OnInit {
  message:string;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  reply() {
    this.http.post('/reply', this.message).toPromise()
      .then(_ => alert('Спасибо за ваш отзыв! Он будет рассмотрен в ближайшее время'))
      .catch(_ => alert('Отсутствует имплементация'));
  }

}

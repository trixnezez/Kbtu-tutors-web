import * as Rx from "rxjs/Rx";
import { from, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-all-replies',
  templateUrl: './all-replies.component.html',
  styleUrls: ['./all-replies.component.scss']
})
export class AllRepliesComponent implements OnInit {
  replies: Observable<Reply[]>;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getReplies();
  }

  getReplies() {
    this.replies = this.http.get<Reply[]>('/get-all-replies');
  }
}

class Reply {
  message: string;
  author: string;
}
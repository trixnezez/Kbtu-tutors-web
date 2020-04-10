import { Component, OnInit } from '@angular/core';

declare var Chart: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var randomArray = Array(5).fill(() => Math.floor(Math.random() * 100));
    var chart = new Chart('chart', {
      type: 'radar',
      data: {
        labels: [
          'Чтение',
          'Аудирование',
          'Речь',
          'Произношение',
          'Словарный запас',
        ],
        datasets: [
          {
            label: 'Средние показатели за последний месяц',
            borderColor: 'rgb(140, 77, 199)',
            backgroundColor: 'rgba(140, 77, 199, .2)',
            data: randomArray.map(f => f()),
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        pointStyle: 'star',
      },
    });

    new Chart('chart-mobile', {
      type: 'bar',
      data: {
        labels: [
          'Чтение',
          'Аудирование',
          'Речь',
          'Произношение',
          'Словарный запас',
        ],
        datasets: [
          {
            label: 'Средние показатели за последний месяц',
            backgroundColor: 'rgb(140, 77, 199)',
            data: randomArray.map(f => f()),
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        pointStyle: 'star',
      },
    });
  }

}

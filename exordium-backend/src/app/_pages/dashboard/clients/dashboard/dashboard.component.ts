import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalConnections: number;
  totalBandwidth: number;
  totalSessions: number;

  totalConnectionsChart = [];
  totalBandwidthChart = [];
  totalSessionsChart = [];

  constructor() { }

  ngOnInit(): void {

    // placeholder numbers
    this.totalConnections = this.randomNumber();
    this.totalBandwidth = this.randomNumber();
    this.totalSessions = this.randomNumber();

    // connections
    this.totalConnectionsChart = new Chart(document.getElementById('totalConnectionsChart'), {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: (this.randomNumberObject(7))
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        elements: {
          line: {
            borderWidth: 2
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      }
    });

    // bandwidth
    this.totalBandwidthChart = new Chart(document.getElementById('totalBandwidthChart'), {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: (this.randomNumberObject(7))
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        elements: {
          line: {
            borderWidth: 2
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      }
    });

    // sessions
    this.totalSessionsChart = new Chart(document.getElementById('totalSessionsChart'), {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: (this.randomNumberObject(7))
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        elements: {
          line: {
            borderWidth: 2
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      }
    });

  }

  randomNumberObject(total): Object {
    const n = [];

    for (var i = 0; i < total; i++) {
      n.push(Math.round(Math.random() * 100))
    }

    return n;
  }

  randomNumber(): number {
    return Math.round(Math.random() * 100);
  }

}

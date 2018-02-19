import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare var $: any;

@Component({
  selector: 'app-root',
  template: `

    <h1>RX Store</h1>

    <div id="org" ></div>

  `
})
export class AppComponent implements OnInit {

  ngOnInit() {

    $(function () {

      var datascource = {
        'name': 'Lao Lao',
        'title': 'general manager',
        'children': [
          { 'name': 'Bo Miao', 'title': 'department manager' },
          {
            'name': 'Su Miao', 'title': 'department manager',
            'children': [
              { 'name': 'Tie Hua', 'title': 'senior engineer' },
              {
                'name': 'Hei Hei', 'title': 'senior engineer',
                'children': [
                  { 'name': 'Pang Pang', 'title': 'engineer' },
                  { 'name': 'Xiang Xiang', 'title': 'UE engineer' }
                ]
              }
            ]
          },
          { 'name': 'Yu Jie', 'title': 'department manager' },
          { 'name': 'Yu Li', 'title': 'department manager' },
          { 'name': 'Hong Miao', 'title': 'department manager' },
          { 'name': 'Yu Wei', 'title': 'department manager' },
          { 'name': 'Chun Miao', 'title': 'department manager' },
          { 'name': 'Yu Tie', 'title': 'department manager' }
        ]
      };

      $('#org').orgchart({
        'data': datascource,
        'visibleLevel': 2,
        'nodeContent': 'title',
      });

    });

  }

}

import { Component, OnInit } from '@angular/core';

import { Contest } from 'src/app/models/contest.model';
import { ContestServiceService } from 'src/app/services/contest-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = 'Nguyễn Ngọc Uy';
  contests: Array<Contest> | undefined;
  constructor(private contestServie: ContestServiceService) { }

  ngOnInit(): void {
    this.contestServie.getListContest().subscribe(res => {
      if (res.status == true) {
        this.contests = res.payload.data;
        this.contests = this.contests?.filter((item, index) => {
          return index < 4;
        });

      }
      // console.log(res);

    })
  }



}

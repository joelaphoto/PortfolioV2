import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-Development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss'],
  providers: [ProjectService]
})
export class DevelopmentComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  calulateMonths(dateString) {
    const d1 = new Date(dateString);
    const d2 = new Date();
    let months;

    function isYears(years) {
      if (years < 2) {
        return " Year"
      } else {
        return " Years"
      }
    }

    function isMonths(months) {
      if (months < 2) {
        return " Month "
      } else {
        return " Months"
      }
    }

    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    if (months < 12) {
      return months + isMonths(months)
    } else if (months >= 12) {
      const dispMonths = months % 12;
      const years = (months - dispMonths) / 12;
      if (dispMonths > 0) {
        return years + isYears(years) + " " + dispMonths + isMonths(dispMonths);
      } else {
        return years + isYears(years);
      }
    }
  }

  changeDate(dateString) {
    const year = dateString.slice(0,4)
    const month = dateString.slice(5,7)
    const day = dateString.slice(8,10)
    const formattedString = 'Start Date: ' + month + '/' + day + '/' + year;
    return formattedString
  }
}

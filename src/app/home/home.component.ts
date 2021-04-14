import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../core/projects/projects.service';
import { Projects } from '../types/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Projects[];

  constructor(
    private projectService: ProjectsService,
  ) { }

  ngOnInit(): void {
    this.projectService.getProjects()
      .subscribe((data) => {
        this.projects = data;
      }, error => {
        console.log(error);
      })
  }


}

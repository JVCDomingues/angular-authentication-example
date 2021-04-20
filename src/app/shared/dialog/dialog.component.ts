import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/core/projects/projects.service';

interface Message {
  severity: string;
  summary: string;
  detail: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  projectForm: FormGroup;
  addProjectError: boolean = false;
  message: Message[];

  @ViewChild('projectName', { static: false }) projectName: ElementRef<HTMLInputElement>;

  @Input() displayDialog: boolean;
  @Input() showDialog: () => {};

  constructor(private formBuilder: FormBuilder, private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  dialogControl() {
    this.showDialog();
  }

  addProject() {
    const name = this.projectForm.get('name').value;
    const description = this.projectForm.get('description').value;

    this.projectService.addProject(name, description)
      .subscribe(() => {
        this.addProjectError = true;
        this.message = [
          { severity: 'success', summary: 'Success', detail: `${name} project succesfully added!` }
        ];

        this.projectForm.reset();
        this.displayDialog = false;
      }, () => {
        this.addProjectError = true;
        this.message = [
          { severity: 'error', summary: 'Error', detail: `Project ${name} already exists` }
        ];

        this.projectName.nativeElement.focus();
        this.projectForm.reset();
      });
  }

}

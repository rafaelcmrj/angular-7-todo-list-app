import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from 'src/app/shared/services/tasks.service';
import { Task } from 'src/app/shared/models/task.model';
import { MatSnackBar, MatDialog } from '@angular/material';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @ViewChild('form') ngForm;
  @ViewChild('dialog') templateDialog;

  private _tasksService: TasksService;
  private _snackbar: MatSnackBar;
  private _dialog: MatDialog;

  public tasksForm: FormGroup;
  public hasApplicationID: boolean;
  public tasks: Array<Task>;

  constructor(tasksService: TasksService, snackbar: MatSnackBar, dialog: MatDialog) {
    this._tasksService = tasksService;
    this._snackbar = snackbar;
    this._dialog = dialog;
  }

  ngOnInit() {
    this.hasApplicationID = localStorage.getItem('avantlink_profile_app_id') != null;

    if (this.hasApplicationID) {
      this._tasksService.applicationID = localStorage.getItem('avantlink_profile_app_id');
    }

    this.tasksForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    });

    this._tasksService.listAll().subscribe(request => {
      this.tasks = request.data;
    });
  }

  insert() {
    this._tasksService.insert(this.tasksForm.value).subscribe(request => {
      if (request.success) {
        this.tasks.push(request.data);
        this._snackbar.open('Task successfully added', 'Dismiss', {
          duration: 3000
        });
        this.ngForm.resetForm();
      }
    });
  }

  delete(task: Task) {
    const dialogRef = this._dialog.open(this.templateDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._tasksService.delete(task.task_id).subscribe(request => {
          if (request.success) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
            this._snackbar.open('Task successfully removed', 'Dismiss', {
              duration: 3000
            });
          }
        })
      }
    });
  }

  update(task: Task) {
    this._tasksService.update(task.task_id, {
      name: task.task_name
    }).subscribe(request => {
      if (request.success) {
        task.editing = false;
        this._snackbar.open('Task successfully edited', 'Dismiss', {
          duration: 3000
        });
      }
    })
  }

}
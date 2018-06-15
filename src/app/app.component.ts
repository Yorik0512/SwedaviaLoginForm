/**
 * @file
 * Main component.
 */

// Core imports.
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

// Angular material imports.
import { MatDialog } from '@angular/material';

// Custom imports.
import { CustomValidators } from './custom-validators';
import { DialogDataComponent } from '@src/app/components/dialog-data/dialog-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/**
 * Component class.
 */
export class AppComponent implements OnInit {

  /**
   * Form group data.
   * @type {object}
   */
  private loginForm: FormGroup;

  /**
   * Constructor.
   * @param {FormBuilder} fb
   *   Core form builder.
   * @param {MatDialog} dialog
   *   Material dialogs.
   */
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
  }

  /**
   * OnInit lifecycle hook.
   */
  ngOnInit() {
    // Validate fields of login form.
    this.loginForm = this.fb.group({
      'userName': ['', Validators.compose([Validators.required, CustomValidators.userName])],
      'password': ['', Validators.compose([Validators.required, CustomValidators.password])],
    });
  }

  /**
   * Form submit callback.
   * @param {object} loginForm
   *   Form data.
   */
  public login(loginForm) {
    // Open material modal dialog.
    this.dialog.open(DialogDataComponent, {
      data: {
        username: loginForm.value.userName
      }
    });
  }
}

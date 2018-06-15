/**
 * @file
 * Contains implementation of login form error.
 */

// Core imports.
import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.scss']
})

/**
 * Component class.
 */
export class ShowErrorsComponent {
  /**
   * List of error messages.
   * @type {object}
   */
  private static readonly errorMessages = {
    'required': () => 'This field is required',
    'userName': (params) => params.message,
    'password': (params) => params.message,
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessages[type](params);
  }

}

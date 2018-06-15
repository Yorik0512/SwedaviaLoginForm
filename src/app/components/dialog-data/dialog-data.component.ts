/**
 * @file
 * Contains implementation of submit login form dialog.
 */

// Core imports.
import { Component, Inject } from '@angular/core';

// Angular material imports.
import { MAT_DIALOG_DATA } from '@angular/material';

/**
 * Component class.
 */
@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
})

export class DialogDataComponent {
  /**
   * Constructor.
   * @param {Object} data
   *   Data.
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}

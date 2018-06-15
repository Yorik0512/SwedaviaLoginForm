import { FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

  static userName(c: FormControl): ValidationErrors {
    const numValue = c.value;
    const isValid = /^[A-Za-z]+$/.test(numValue);
    const message = {
      'userName': {
        'message': 'Please write only text!'
      }
    };
    return isValid ? null : message;
  }

  static password(c: FormControl): ValidationErrors {
    const numValue = c.value;
    const isValid = /\d/.test(numValue);
    const message = {
      'userName': {
        'message': 'Please write only numbers!'
      }
    };
    return isValid ? null : message;
  }

}

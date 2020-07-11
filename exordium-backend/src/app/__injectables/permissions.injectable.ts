import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class Permissions {

    constructor(
        private router: Router,
        private toastr: ToastrService
    ) { }

    checkPermissions(currentUser, page) {
        if (this.checkAccessPage(currentUser, page)) {
            return true;
        } else {
          this.denied();
          return false;
        }
    }

    checkAccessPage(array, value, key = 'page') {
        return array.some(object => object[key] === value);
    }

    denied(): void {
        this.toastr.error('You don\'t have proper permissions to access that page!');
        this.router.navigate(['dashboard']);
    }


}

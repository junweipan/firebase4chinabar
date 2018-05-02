import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logname = '';
  logpsw = '';
  constructor(public authService: AuthService,
              private tostr: ToastrService,
              private router: Router) { }

  ngOnInit() {
  }
  onSubmit(loginForm: NgForm) {
     // console.log(loginForm.value.admin);
    if (this.logname === this.authService.logname && this.logpsw === this.authService.logpsw) {
      this.authService.loggedIn = true;
      this.router.navigate(['admin']);
    } else {
      this.tostr.warning('user name or password incorrect', 'Login as Admin');
    }
  }

  resetForm(logForm?: NgForm) {
    if (logForm != null) {
      logForm.reset();
    }
  }
}

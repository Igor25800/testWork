import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isToggle = false;

  constructor(
    private router: Router
  ) {
  }

  get url(): string {
    this.isToggle = JSON.parse(<string>localStorage.getItem('toggle'))
    if (this.isToggle) {
      return 'profile';
    }
    return 'error';
  }

  exit(): void {
    localStorage.setItem('toggle', JSON.stringify(false))
    this.router.navigate(['login'])
  }
}

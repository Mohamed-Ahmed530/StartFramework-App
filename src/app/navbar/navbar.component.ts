import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // @HostListener
  scrollP: boolean = false;

  @HostListener('window:scroll') onScroll() {
    if (scrollY > 0) {
      this.scrollP = true;
    } else {
      this.scrollP = false;
    }
  }
}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { NotfoundComponent } from "./notfound/notfound.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, AboutComponent, PortfolioComponent, ContactComponent, FooterComponent, NotfoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StartFramework';
}

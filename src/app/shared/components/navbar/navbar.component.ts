import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public navbarLinks = [
    { label: "Inicio", icon: "home" , url: "/meals/meals-list" },
    { label: "Mis favoritos", icon: "favorite" , url: "/favorites/my-favorites" },
  ];

}

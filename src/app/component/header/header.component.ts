import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 marathi : string = "मराठी";
 email : string =" shubhamKshirsagar4045@gmail.com";
 isDropdownOpen = {
  foodDropdown: false,
  clothesDropdown: false,
  decorDropdown: false,
  rentalsDropdown: false,
};
toggleDropdown(dropdown: keyof typeof this.isDropdownOpen) {
  this.isDropdownOpen[dropdown] = !this.isDropdownOpen[dropdown];
}
}

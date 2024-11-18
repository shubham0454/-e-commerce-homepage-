import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
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


}

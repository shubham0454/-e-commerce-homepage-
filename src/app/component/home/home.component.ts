import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
email ="shubhamkshirsagar4045@gmail.com"
products: any[] = [];

constructor(private productService : ProductService) {}

ngOnInit(): void {
  this.products = this.productService.getProducts();
}

}

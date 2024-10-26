import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products = [
    {
      id: 1,
      name: 'Handmade Flowerpots',
      price: 499,
      image:
        'https://storage.googleapis.com/a1aa/image/EdA3ll3okFJeDixKdhKmBdgXe5r4UDHNIcvPIjhBeqkxAqUnA.jpg',
    },
    {
      id: 2,
      name: 'Salted Fasting Potato Chips',
      price: 59,
      image:
        'https://storage.googleapis.com/a1aa/image/eXejqP2KtxkTRkTlEPdbNr7bcT1fWDcej5VBgcVzh4GKBUpOB.jpg',
    },
    {
      id: 3,
      name: 'Handloom saree for womens               ',
      price: 999,
      image:
        'https://storage.googleapis.com/a1aa/image/Ge8efB7lTGBhLoIh8DHSVzDl6ZePVLJNWJ1FkCNrywjUBUpOB.jpg',
    },
    {
      id: 4,
      name: 'Pink flower jewellery Rent              ',
      price: 799,
      image:
        'https://storage.googleapis.com/a1aa/image/CL6asJmwtgIkGBlbBkiJLfhycgPX4SMRN36WhuHFFd6FgK1JA.jpg',
    },
  ];
  getProducts() {
    return this.products;
  }

}

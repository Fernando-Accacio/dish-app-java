import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishService, Dish } from '../../services/dish.service';

interface CartItem extends Dish {
  quantity: number;
}

@Component({
  selector: 'app-dish-store',
  templateUrl: './dish-store.component.html',
  styleUrls: ['./dish-store.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DishStoreComponent implements OnInit {
  dishes: Dish[] = [];
  cart: CartItem[] = [];
  totalAmount: number = 0;

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.loadDishes();
  }

  loadDishes(): void {
    this.dishService.getDishes().subscribe((data: Dish[]) => {
      this.dishes = data;
    });
  }

  addToCart(dish: Dish): void {
    const existingItem = this.cart.find(item => item.id === dish.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...dish, quantity: 1 });
    }
    
    this.updateTotal();
  }

  removeFromCart(dish: CartItem): void {
    const index = this.cart.findIndex(item => item.id === dish.id);
    if (index > -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
      } else {
        this.cart.splice(index, 1);
      }
    }
    this.updateTotal();
  }

  updateTotal(): void {
    this.totalAmount = this.cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  checkout(): void {
    // Implement checkout logic here
    console.log('Checkout:', this.cart);
    // You could add API call to process order
    this.cart = [];
    this.totalAmount = 0;
  }
}
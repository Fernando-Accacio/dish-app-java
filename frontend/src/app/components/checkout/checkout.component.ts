// src/app/components/checkout/checkout.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Dish } from '../../services/dish.service';

interface CartItem extends Dish {
  quantity: number;
}

interface OrderInfo {
  customerName: string;
  address: string;
  phone: string;
  paymentMethod: 'cash' | 'credit' | 'debit';
  note: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalAmount: number = 0;
  
  orderInfo: OrderInfo = {
    customerName: '',
    address: '',
    phone: '',
    paymentMethod: 'credit',
    note: ''
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Recuperar os itens do carrinho do localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.calculateTotal();
    } else {
      // Se não houver itens no carrinho, redirecionar para a loja
      this.router.navigate(['/store']);
    }
  }

  calculateTotal(): void {
    this.totalAmount = this.cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  confirmOrder(): void {
    const order = {
      id: 'ORD' + Date.now(), // Gerar ID único (deve vir do backend)
      items: this.cartItems,
      total: this.totalAmount,
      ...this.orderInfo,
      status: 'confirmed',
      createdAt: new Date(),
      estimatedDelivery: new Date(Date.now() + 30 * 60000) // +30 minutos
    };

    console.log('Ordem finalizada:', order);
    
    localStorage.setItem('lastOrder', JSON.stringify(order));

    // Limpar o carrinho
    localStorage.removeItem('cart');
    
    // Redirecionar para uma página de confirmação
    this.router.navigate(['/pedido']);
  }

  goBackToStore(): void {
    this.router.navigate(['/']);
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface OrderStatus {
  step: number;
  title: string;
  description: string;
  timestamp: Date;
  completed: boolean;
}

interface OrderDetails {
  id: string;
  items: any[];
  total: number;
  customerName: string;
  address: string;
  phone: string;
  paymentMethod: string;
  status: string;
  createdAt: Date;
  estimatedDelivery?: Date;
}

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class OrderTrackingComponent implements OnInit {
  orderId: string = '';
  orderDetails: OrderDetails | null = null;
  
  orderStatuses: OrderStatus[] = [
    {
      step: 1,
      title: 'Pedido confirmado',
      description: 'Seu pedido foi recebido e confirmado.',
      timestamp: new Date(),
      completed: true
    },
    {
      step: 2,
      title: 'Preparando',
      description: 'Seu pedido está sendo preparado na cozinha',
      timestamp: new Date(Date.now() + 5 * 60000), // +5 minutes
      completed: false
    },
    {
      step: 3,
      title: 'Saiu para entrega',
      description: 'Seu pedido está na rota pra entrega',
      timestamp: new Date(Date.now() + 15 * 60000), // +15 minutes
      completed: false
    },
    {
      step: 4,
      title: 'Entrega',
      description: 'Aproveite seu pedido',
      timestamp: new Date(Date.now() + 30 * 60000), // +30 minutes
      completed: false
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Recuperar o pedido do localStorage (temporário - deve vir do backend)
    const savedOrder = localStorage.getItem('lastOrder');
    
    if (savedOrder) {
      try {
        this.orderDetails = JSON.parse(savedOrder);

        if (this.orderDetails && this.orderDetails.createdAt) {
          // Simular status atual baseado no tempo desde a criação
          const timeSinceOrder = Date.now() - new Date(this.orderDetails.createdAt).getTime();
          const currentStep = Math.min(Math.floor(timeSinceOrder / (10 * 60000)) + 1, 4);

          this.orderStatuses.forEach((status, index) => {
            status.completed = index < currentStep;
          });
        }
      } catch (error) {
        console.error('Erro ao parsear o pedido:', error);
        this.router.navigate(['/store']);
      }
    } else {
      // Se não houver pedido, redirecionar para a loja
      this.router.navigate(['/store']);
    }
  }

  getCurrentStatus(): string {
    if (!this.orderDetails) return 'Nenhum pedido encontrado';
    
    const currentStatus = this.orderStatuses.find(status => !status.completed);
    return currentStatus ? currentStatus.title : 'Delivered';
  }

  getEstimatedDeliveryTime(): string {
    if (!this.orderDetails || !this.orderDetails.createdAt) return '';

    const estimatedDelivery = new Date(this.orderDetails.createdAt);
    estimatedDelivery.setMinutes(estimatedDelivery.getMinutes() + 30);
    return estimatedDelivery.toLocaleTimeString();
  }

  backToStore(): void {
    this.router.navigate(['/finalizado']);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import CartService from '../../../services/cart-service/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-normal-layout',
  standalone: false,
  templateUrl: './normal-layout.html',
  styleUrl: './normal-layout.scss'
})
export class NormalLayout implements OnInit, OnDestroy {
  totalCartAmount: number = 0;
  private dataSubscription!: Subscription;

  constructor(
    private cartService:CartService,
  ) {}

  ngOnInit(): void {
    this.dataSubscription = this.cartService.getCart.subscribe(cart => {
      this.totalCartAmount = this.cartService.getTotalCartAmount();
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}

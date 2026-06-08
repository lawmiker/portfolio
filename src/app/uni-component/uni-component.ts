import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BackButton } from '../../assets/shared/back-button/back-button';

@Component({
  selector: 'app-uni-projects',
  standalone: true,
  imports: [CommonModule,  RouterLink, RouterLinkActive, BackButton],
  templateUrl: './uni-component.html',
  styleUrls: ['./uni-component.css'],
})
export class UniComponent {
  navItems = [
    { label: 'Picnic Basket', link: '/project/picnic-basket' },
    { label: 'Heart Rate Game', link: '/project/hr-game' },
    { label: 'Flexwear', link: '/project/flexwear' },
  ];
  
  tappedIndex: number | null = null;

  markTapped(index: number) {
    this.tappedIndex = index;
  }
}
import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-menu-component',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './main-menu-component.html',
  styleUrl: './main-menu-component.css',
})
export class MainMenuComponent {
  navItems = [
    { label: 'About', link: '/about' },
    { label: 'University Projects', link: '/uni-projects' },
    { label: '2D and 3D Art', link: '/art' },
  ];

  tappedIndex: number | null = null;

  markTapped(index: number) {
    this.tappedIndex = index;
  }
}

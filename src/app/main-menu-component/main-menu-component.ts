import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-main-menu-component',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './main-menu-component.html',
  styleUrl: './main-menu-component.css',
})
export class MainMenuComponent {

  tappedIndex: number | null = null;
  isVisible = false;
  
  navItems = [
    { label: 'About', link: '/about' },
    { label: 'Uni Projects', link: '/uni-projects' },
    { label: '2D and 3D Art', link: '/art' },
  ];

  markTapped(index: number) {
    this.tappedIndex = index;
  }

  mouseEnter(): void { this.isVisible = true; }

  mouseLeave(): void { this.isVisible = false; }

  onTextClick(event: Event): void {
      event.stopPropagation();
      this.isVisible = !this.isVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    this.isVisible = false;
  }
  
}

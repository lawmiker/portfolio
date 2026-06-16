import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButton } from '../../assets/shared/back-button/back-button';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [CommonModule, BackButton],
  templateUrl: './art.html',
  styleUrl: './art.css',
})
export class Art {
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.PNG', '6.PNG', '7.jpg'];
}

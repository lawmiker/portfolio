import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectData } from '../data/project.model';
import { ActivatedRoute } from '@angular/router';
import { Project_Name } from '../data/project.data';
import { BackButton } from '../../assets/shared/back-button/back-button';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, BackButton],
  templateUrl: './project.html',
  styleUrls: ['./project.css'],
})
export class Project {
  project!: ProjectData;
  currentSlide = 0;
  currentImage = 0;

  constructor(private route: ActivatedRoute) {}

   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      if (slug) {
        this.project = Project_Name[slug];
      }
    });
  }

  getProjectIcon(project: ProjectData): string {
    return `assets/images/project-icons/${project.projectIcon}`;
  }
  
  nextSlide(): void {
    if (this.currentSlide < this.project.featureSlides.length - 1) { this.currentSlide++; this.currentImage = 0;}
  }
  
  prevSlide(): void {
    if (this.currentSlide > 0) { this.currentSlide--; this.currentImage = 0;}
  }

  nextImage(): void {
  const images = this.project.featureSlides[this.currentSlide].images;

  if (this.currentImage < images.length - 1) {
    this.currentImage++;
  }
}

prevImage(): void {
  if (this.currentImage > 0) {
    this.currentImage--;
  }
}
  
  getFeatureImage(): string {
    const slide = this.project.featureSlides[this.currentSlide];
    return `assets/images/${this.project.slug}/${slide.images[this.currentImage]}`;
  }
}

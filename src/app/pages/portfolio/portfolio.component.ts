import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  category: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="pt-32">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
          <h1 class="text-5xl font-bold mb-6">My Work</h1>
          <p class="text-xl text-gray-600">
            Some of my projects and collaborations.
          </p>
        </div>

        <div class="flex justify-center mb-12 space-x-4" data-aos="fade-up">
          <button *ngFor="let cat of categories"
                  (click)="filterProjects(cat)"
                  [class.bg-blue-600]="currentCategory === cat"
                  [class.text-white]="currentCategory === cat"
                  class="px-6 py-2 rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
            {{cat}}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of filteredProjects; let i = index"
               class="group relative overflow-hidden rounded-lg shadow-lg"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <img [src]="project.image" 
                 [alt]="project.title"
                 class="w-full h-64 object-cover">
            <div class="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="text-center text-white p-6">
                <h3 class="text-xl font-bold mb-2">{{project.title}}</h3>
                <p class="mb-4">{{project.description}}</p>
                <div class="flex flex-wrap justify-center gap-2 mb-4">
                  <span *ngFor="let tech of project.technologies"
                        class="px-3 py-1 bg-white/20 rounded-full text-sm">
                    {{tech}}
                  </span>
                </div>
                <a [href]="project.link"
                   target="_blank"
                   class="inline-block px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PortfolioComponent {
  categories = ['All', 'Web Apps', 'Mobile', 'UI/UX', 'DevOps'];
  currentCategory = 'All';

  projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'Modern shopping experience with real-time inventory.',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      image: 'https://placehold.co/800x600',
      link: '#',
      category: 'Web Apps'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management solution.',
      technologies: ['React', 'Django', 'PostgreSQL'],
      image: 'https://placehold.co/800x600',
      link: '#',
      category: 'Web Apps'
    },
    {
      title: 'Fitness Tracking App',
      description: 'Mobile app for tracking workouts and nutrition.',
      technologies: ['React Native', 'Firebase'],
      image: 'https://placehold.co/800x600',
      link: '#',
      category: 'Mobile'
    },
    {
      title: 'Banking Dashboard',
      description: 'Financial management interface design.',
      technologies: ['Figma', 'Adobe XD'],
      image: 'https://placehold.co/800x600',
      link: '#',
      category: 'UI/UX'
    }
  ];

  get filteredProjects() {
    return this.currentCategory === 'All'
      ? this.projects
      : this.projects.filter(p => p.category === this.currentCategory);
  }

  filterProjects(category: string) {
    this.currentCategory = category;
  }
}
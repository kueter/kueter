import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <section class="min-h-screen flex items-center pt-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl" data-aos="fade-up">
          <h1 class="text-6xl font-bold mb-6">
            Hi, I'm <span class="text-blue-600">Kuete AGBASSAH</span>
          </h1>
          <h2 class="text-4xl font-bold text-gray-700 mb-8">
            Developer Advocate
          </h2>
          <p class="text-xl text-gray-600 mb-12 txt-justify">
          DESCRIBE
          </p>
          <div class="flex gap-6">
            <a routerLink="/portfolio" 
               class="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              View My Work
            </a>
            <a routerLink="/contact" 
               class="px-8 py-4 border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-16 text-center" data-aos="fade-up">Featured Technologies</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div class="text-center" data-aos="fade-up" data-aos-delay="400" *ngFor="let item of technologies ; let i = index">
            <i class="fab fa-python text-5xl text-yellow-600 mb-4"></i>
            <h3 class="font-semibold">{{item.title}}</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-16 text-center" data-aos="fade-up">Recent Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="group relative overflow-hidden rounded-lg shadow-lg" 
               *ngFor="let project of featuredProjects; let i = index"
               [attr.data-aos]="'fade-up'"
               [attr.data-aos-delay]="i * 100">
            <img [src]="project.image" [alt]="project.title" class="w-full h-64 object-cover">
            <div class="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="text-center text-white p-6">
                <h3 class="text-xl font-bold mb-2">{{project.title}}</h3>
                <p class="mb-4">{{project.description}}</p>
                <a [href]="project.link" target="_blank" 
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
export class HomeComponent {
  featuredProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Modern shopping experience built with Angular & Node.js',
      image: 'https://placehold.co/800x600',
      link: '#'
    },
    {
      title: 'Task Management',
      description: 'Collaborative project management tool',
      image: 'https://placehold.co/800x600',
      link: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform',
      image: 'https://placehold.co/800x600',
      link: '#'
    }
  ];

  technologies = [
    { 
      title: "Angular",
      icon: "" ,
      color: ""
    },
    { 
      title: "React.js",
      icon: "" ,
      color: ""
    },
    { 
      title: "Nest.js",
      icon: "" ,
      color: ""
    },
    { 
      title: "Node.js",
      icon: "" ,
      color: ""
    },
    { 
      title: "Golang",
      icon: "" ,
      color: ""
    },
    { 
      title: "Kubernetes",
      icon: "" ,
      color: ""
    },
    { 
      title: "Kafka",
      icon: "" ,
      color: ""
    },
    { 
      title: "Helm",
      icon: "" ,
      color: ""
    },
    { 
      title: "AWS",
      icon: "" ,
      color: ""
    },
    { 
      title: "Azure",
      icon: "" ,
      color: ""
    },
    { 
      title: "Google Cloud",
      icon: "" ,
      color: ""
    },
    { 
      title: "Prometheus",
      icon: "" ,
      color: ""
    },
    { 
      title: "ArgoCD",
      icon: "" ,
      color: ""
    },
    { 
      title: "Openshift",
      icon: "" ,
      color: ""
    },
    { 
      title: "kubebuilder",
      icon: "" ,
      color: ""
    },
    { 
      title: "Terraform",
      icon: "" ,
      color: ""
    }
  ];
}
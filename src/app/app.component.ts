import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <nav class="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <a routerLink="/" class="text-2xl font-bold text-gray-800">
            <img src="logo.png" class="img-size" alt="" srcset="">
          </a>
          <ul class="flex space-x-8">
            <li><a routerLink="/" class="hover:text-blue-600 transition-colors">Home</a></li>
            <li><a routerLink="/about" class="hover:text-blue-600 transition-colors">About</a></li>
            <li><a routerLink="/portfolio" class="hover:text-blue-600 transition-colors">Work</a></li>
            <li><a routerLink="/blog" class="hover:text-blue-600 transition-colors">Blog</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer class="bg-gray-50 mt-32">
      <div class="container mx-auto px-4 py-12">
        <div class="flex flex-col items-center space-y-4">
          <div class="flex space-x-6">
            <a href="https://github.com/kueter" target="_blank" class="text-gray-600 hover:text-blue-600 transition-colors">
              <i class="fab fa-github text-xl"></i>
            </a>
            <a href="https://linkedin.com/in/roodolphe" target="_blank" class="text-gray-600 hover:text-blue-600 transition-colors">
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://x.com/KRoodolphe" target="_blank" class="text-gray-600 hover:text-blue-600 transition-colors">
              <i class="fab fa-twitter text-xl"></i>
            </a>
          </div>
          <p class="text-gray-600">© 2025 Portfolio. Built with Angular & TailwindCSS</p>
        </div>
      </div>
    </footer>
  `
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }
}
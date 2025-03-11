import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="pt-32">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16" data-aos="fade-up">
            <h1 class="text-5xl font-bold mb-6">Get in Touch</h1>
            <p class="text-xl text-gray-600">
              Have a project in mind? Let's work together to create something amazing.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
              <div class="space-y-6">
                <div class="flex items-center">
                  <i class="fas fa-envelope text-2xl text-blue-600 w-8"></i>
                  <a href="mailto:contact@example.com" class="text-gray-600 hover:text-blue-600">
                    e-mail
                  </a>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-phone text-2xl text-blue-600 w-8"></i>
                  <a href="tel:+1234567890" class="text-gray-600 hover:text-blue-600">
                    +1 (234) 567-890
                  </a>
                </div>
                <div class="flex items-center">
                  <i class="fas fa-map-marker-alt text-2xl text-blue-600 w-8"></i>
                  <span class="text-gray-600">San Francisco, CA</span>
                </div>
              </div>

              <div class="mt-12">
                <h2 class="text-2xl font-bold mb-6">Follow Me</h2>
                <div class="flex space-x-6">
                  <a href="https://github.com" target="_blank" 
                     class="text-gray-600 hover:text-blue-600 transition-colors">
                    <i class="fab fa-github text-2xl"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank"
                     class="text-gray-600 hover:text-blue-600 transition-colors">
                    <i class="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank"
                     class="text-gray-600 hover:text-blue-600 transition-colors">
                    <i class="fab fa-twitter text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input type="text"
                         id="name"
                         formControlName="name"
                         class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <div *ngIf="contactForm.get('name')?.touched && contactForm.get('name')?.invalid"
                       class="text-red-600 text-sm mt-1">
                    Please enter your name
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email"
                         id="email"
                         formControlName="email"
                         class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <div *ngIf="contactForm.get('email')?.touched && contactForm.get('email')?.invalid"
                       class="text-red-600 text-sm mt-1">
                    Please enter a valid email address
                  </div>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message"
                           formControlName="message"
                           rows="6"
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                  <div *ngIf="contactForm.get('message')?.touched && contactForm.get('message')?.invalid"
                       class="text-red-600 text-sm mt-1">
                    Please enter your message
                  </div>
                </div>

                <button type="submit"
                        [disabled]="contactForm.invalid"
                        class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // TODO: Implement form submission logic
    }
  }
}

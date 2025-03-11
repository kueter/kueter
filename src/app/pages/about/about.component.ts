import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="pt-32">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div data-aos="fade-up">
            <h1 class="text-5xl font-bold mb-8">About Me</h1>
            <p class="text-xl text-gray-600 mb-12 txt-justify">
               Innovative and versatile technology professional with a comprehensive skill set spanning Fullstack Web Development, DevOps & Cloud Engineering, and Data Engineering. Adept at designing, developing, and deploying scalable web applications, optimizing cloud infrastructure, and building robust data pipelines to drive data-driven decision-making. With a strong foundation in both front-end and back-end development, coupled with expertise in automation, CI/CD, and cloud platforms, I deliver end-to-end solutions that enhance performance, reliability, and scalability. Passionate about leveraging cutting-edge technologies to solve complex problems and deliver impactful results across the entire software development lifecycle 
            </p>
          </div>
          <h2 class="text-2xl font-bold mb-6">Experience</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div data-aos="fade-right">
             
              <div class="space-y-8">
                <div class="border-l-4 border-blue-600 pl-4">
                  <h3 class="font-bold">Senior Software Engineer</h3>
                  <p class="text-gray-600">Tech Corp • 2021 - Present</p>
                  <p class="mt-2">Leading development of enterprise applications and mentoring junior developers.</p>
                </div>
                <div class="border-l-4 border-blue-600 pl-4">
                  <h3 class="font-bold">Full Stack Developer</h3>
                  <p class="text-gray-600">Digital Agency • 2019 - 2021</p>
                  <p class="mt-2">Developed and maintained client projects using modern web technologies.</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
          
              <div class="space-y-8">
                <div class="border-l-4 border-blue-600 pl-4">
                  <h3 class="font-bold">Senior Software Engineer</h3>
                  <p class="text-gray-600">Tech Corp • 2021 - Present</p>
                  <p class="mt-2">Leading development of enterprise applications and mentoring junior developers.</p>
                </div>
                <div class="border-l-4 border-blue-600 pl-4">
                  <h3 class="font-bold">Full Stack Developer</h3>
                  <p class="text-gray-600">Digital Agency • 2019 - 2021</p>
                  <p class="mt-2">Developed and maintained client projects using modern web technologies.</p>
                </div>
              </div>
            </div>
          </div>
          <h2 class="text-2xl font-bold mb-6">Education</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div data-aos="fade-left">
              <div class="space-y-8">
                <div class="border-l-4 border-blue-600 pl-4">
                  <h3 class="font-bold">MSc in Computer Science</h3>
                  <p class="text-gray-600">University of Technology • 2019</p>
                </div>
                <div class="border-l-4 border-blue-600 pl-4">
                  <h3 class="font-bold">BSc in Software Engineering</h3>
                  <p class="text-gray-600">Tech University • 2017</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <div class="space-y-8">
                <div class="border-l-4 border-blue-600 pl-4">
                  <h3 class="font-bold">MSc in Computer Science</h3>
                  <p class="text-gray-600">University of Technology • 2019</p>
                </div>
                <div class="border-l-4 border-blue-600 pl-4">
                  <h3 class="font-bold">BSc in Software Engineering</h3>
                  <p class="text-gray-600">Tech University • 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
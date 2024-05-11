import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('textOpacity', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in-out')  /* Adjust animation duration and timing function */
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({ opacity: 0 }))  /* Adjust animation duration and timing function */
      ])
    ])
  ]
})
export class AppComponent {
  mouseX: number = 0;
  mouseY: number = 0;
  lightRadius: number = 100;
  textX: number = 100;  // X position of the text
  textY: number = 100;  // Y position of the text
  textWidth: number = 100; // Width of the text (adjust based on actual text size)
  textHeight: number = 30; // Height of the text (adjust based on actual text size)
  clipX: number = 0;
  clipY: number = 0;
  isTextVisible: boolean = false; // Added the missing property
  isTextVisible2: boolean = false; // Added the missing property
  isTextVisible3: boolean = false; // Added the missing property

  onmousemove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    this.calculateClip();
  }

  calculateClip() {
    const distanceX = Math.abs(this.mouseX - this.textX);
    const distanceY = Math.abs(this.mouseY - this.textY);
  
    // Adjust clip values based on distance and text dimensions
    this.clipX = Math.max(0, distanceX - this.lightRadius);
    this.clipY = Math.max(0, distanceY - this.lightRadius);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="'button button--' + variant"
      [disabled]="disabled"
      (click)="onClick.emit($event)">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .button {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s ease;
    }

    .button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .button--primary {
      background-color: #007bff;
      color: white;
    }

    .button--primary:hover:not(:disabled) {
      background-color: #0056b3;
    }

    .button--secondary {
      background-color: #6c757d;
      color: white;
    }

    .button--secondary:hover:not(:disabled) {
      background-color: #545b62;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<MouseEvent>();
}

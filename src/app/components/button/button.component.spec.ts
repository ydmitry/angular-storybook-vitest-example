import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { describe, it, expect, beforeEach } from 'vitest';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have primary variant by default', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.className).toContain('button--primary');
  });

  it('should change variant to secondary', () => {
    component.variant = 'secondary';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.className).toContain('button--secondary');
  });

  it('should emit click event', () => {
    let clicked = false;
    component.onClick.subscribe(() => {
      clicked = true;
    });

    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(clicked).toBe(true);
  });

  it('should be disabled when disabled prop is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
  });
});


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/angular';
import {
  composeStories,
  createMountable,
} from '@storybook/testing-angular';
import Meta from './button.stories';
import * as stories from './button.stories';

const { Primary, Secondary } = composeStories(stories);

describe('ButtonComponent', () => {
  it('renders primary button with default args', async () => {
    const { component, applicationConfig } = createMountable(
      Primary({})
    );
    await render(component, { providers: applicationConfig.providers });
    const buttonElement = screen.getByText(
      /Primary Button/i
    );
    expect(buttonElement).not.toBeNull();
  });
});

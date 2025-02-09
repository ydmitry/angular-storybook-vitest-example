import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The visual style of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    onClick: {
      action: 'clicked',
      description: 'Event emitted when the button is clicked'
    }
  }
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  },
  render: (args) => ({
    props: args,
    template: `<app-button [variant]="variant" [disabled]="disabled" (onClick)="onClick($event)">Primary Button</app-button>`
  })
};

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  },
  render: (args) => ({
    props: args,
    template: `<app-button [variant]="variant" [disabled]="disabled" (onClick)="onClick($event)">Secondary Button</app-button>`
  })
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
  render: (args) => ({
    props: args,
    template: `<app-button [variant]="variant" [disabled]="disabled" (onClick)="onClick($event)">Disabled Button</app-button>`
  })
};

import type { Meta, StoryObj } from '@storybook/nextjs';

import Button from './Button';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		children: {
			control: 'text',
			description: 'Content inside the button',
		},
		disabled: {
			control: 'boolean',
			description: 'Disables the button',
		},
		htmlType: {
			control: 'select',
			options: ['button', 'submit', 'reset'],
			description: 'HTML button type',
		},
		onClick: {
			description: 'Click handler',
		},
		form: {
			control: 'text',
			description: 'Form ID to associate with',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Click Me',
		htmlType: 'button' as const,
		onClick: () => {},
	},
};

export const Disabled: Story = {
	args: {
		children: 'Disabled Button',
		disabled: true,
		htmlType: 'button' as const,
		onClick: () => {},
	},
};

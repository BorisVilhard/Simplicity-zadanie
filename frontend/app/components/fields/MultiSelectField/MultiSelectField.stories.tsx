import type { Meta, StoryObj } from '@storybook/nextjs';
import { FormProvider, useForm, FieldError } from 'react-hook-form';
import MultiSelectField from './MultiSelectField';
import { ReactNode } from 'react';

type FormData = {
	selections: string[];
};

interface StoryProps {
	name: keyof FormData;
	label?: string;
	required?: boolean;
	error?: FieldError;
	items: { icon?: ReactNode; label: string; value: string }[];
	placeholder?: ReactNode;
	className?: string;
	disabled?: boolean;
	onChange?: (value: string[]) => void;
}

const meta: Meta<StoryProps> = {
	title: 'Components/MultiSelectField',
	component: MultiSelectField,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<StoryProps>;

const sampleItems = [
	{ label: 'Option 1', value: '1' },
	{ label: 'Option 2', value: '2' },
	{ label: 'Option 3', value: '3' },
];

const Template = (args: StoryProps) => {
	const methods = useForm<FormData>();

	return (
		<FormProvider {...methods}>
			<MultiSelectField<FormData> {...args} />
		</FormProvider>
	);
};

export const Default: Story = {
	render: Template,
	args: {
		name: 'selections',
		label: 'Select Options',
		items: sampleItems,
		placeholder: 'Select options...',
	},
};

export const Required: Story = {
	render: Template,
	args: {
		name: 'selections',
		label: 'Required MultiSelect',
		required: true,
		items: sampleItems,
		placeholder: 'Select required options...',
	},
};

export const Disabled: Story = {
	render: Template,
	args: {
		name: 'selections',
		label: 'Disabled MultiSelect',
		disabled: true,
		items: sampleItems,
		placeholder: 'Disabled select...',
	},
};

export const WithError: Story = {
	render: Template,
	args: {
		name: 'selections',
		label: 'MultiSelect with Error',
		items: sampleItems,
		placeholder: 'Select options...',
		error: { message: 'This field has an error' } as FieldError,
	},
};

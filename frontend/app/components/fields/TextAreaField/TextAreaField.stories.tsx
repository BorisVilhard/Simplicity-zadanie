import type { Meta, StoryObj } from '@storybook/nextjs';
import {
	FormProvider,
	useForm,
	FieldError,
	UseFormRegisterReturn,
} from 'react-hook-form';
import TextAreaField from './TextAreaField';

type FormData = {
	example: string;
};

interface StoryProps {
	name: keyof FormData;
	label?: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	className?: string;
	error?: FieldError;
}

const meta: Meta<StoryProps> = {
	title: 'Components/TextAreaField',
	// @ts-expect-error Ignore type mismatch as register is provided in the template
	component: TextAreaField,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<StoryProps>;

const Template = (args: StoryProps) => {
	const methods = useForm<FormData>();
	const register: UseFormRegisterReturn<string> = methods.register(args.name);

	return (
		<FormProvider {...methods}>
			<TextAreaField<FormData> {...args} register={register} />
		</FormProvider>
	);
};

export const Default: Story = {
	render: Template,
	args: {
		name: 'example',
		label: 'Label',
		placeholder: 'Enter text',
	},
};

export const Disabled: Story = {
	render: Template,
	args: {
		name: 'example',
		label: 'Disabled Field',
		disabled: true,
		placeholder: 'Disabled textarea',
	},
};

export const WithError: Story = {
	render: Template,
	args: {
		name: 'example',
		label: 'Field with Error',
		placeholder: 'Enter text',
		error: { message: 'This field has an error' } as FieldError,
	},
};

import type { Meta, StoryObj } from '@storybook/nextjs';
import {
	FormProvider,
	useForm,
	FieldError,
	UseFormRegisterReturn,
} from 'react-hook-form';
import InputField from './InputField';

type FormData = {
	example: string;
	password: string;
};

interface StoryProps {
	name: keyof FormData;
	label?: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	type?: string;
	error?: FieldError;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const meta: Meta<StoryProps> = {
	title: 'Components/InputField',
	// @ts-expect-error Ignore type mismatch as register is provided in the template
	component: InputField,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		type: {
			control: 'select',
			options: ['text', 'password', 'email', 'number'],
		},
	},
};

export default meta;

type Story = StoryObj<StoryProps>;

const Template = (args: StoryProps) => {
	const methods = useForm<FormData>();
	const register: UseFormRegisterReturn<string> = methods.register(args.name);

	return (
		<FormProvider {...methods}>
			<InputField<FormData> {...args} register={register} />
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
		placeholder: 'Disabled input',
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

export const Password: Story = {
	render: Template,
	args: {
		name: 'password',
		label: 'Password',
		type: 'password',
		placeholder: 'Enter password',
	},
};

import React from 'react';
import { useFormContext, Path, FieldValues } from 'react-hook-form';
import classNames from 'classnames';
import FieldWrapper from '../FieldWrapper/FieldWrapper';

interface Props<T extends FieldValues> {
	name: Path<T>;
	label?: string;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
}

const DateTimeInputField = <T extends FieldValues>({
	name,
	label,
	placeholder = 'Select date and time',
	className,
	disabled,
}: Props<T>) => {
	const {
		register,
		formState: { errors },
	} = useFormContext<T>();

	return (
		<FieldWrapper
			label={label}
			className={className}
			error={errors[name]?.message as string}
		>
			<input
				type='datetime-local'
				className={classNames(
					`h-[4vh] min-h-[45px] w-full border border-gray-300 rounded-md px-[15px] focus:outline-primary-80 focus:ring-2 focus:ring-primary-80`,
					{
						'cursor-not-allowed bg-gray-100 text-gray-400': disabled,
					}
				)}
				placeholder={placeholder}
				disabled={disabled}
				{...register(name)}
			/>
		</FieldWrapper>
	);
};

export default DateTimeInputField;

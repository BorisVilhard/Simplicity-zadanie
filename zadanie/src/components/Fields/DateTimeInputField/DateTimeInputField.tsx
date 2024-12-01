import React from 'react';
import { FieldValues, Path, useFormContext } from 'react-hook-form';
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
				placeholder={placeholder}
				disabled={disabled}
				className={classNames(
					`h-[45px] w-full border-none px-[15px] rounded-md`,
					{
						'bg-gray-200 cursor-not-allowed': disabled,
					}
				)}
				{...register(name)}
			/>
		</FieldWrapper>
	);
};

export default DateTimeInputField;

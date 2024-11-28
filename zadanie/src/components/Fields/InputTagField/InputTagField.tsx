import React from 'react';
import Select, { MultiValue, SingleValue } from 'react-select';
import { useFormContext, Path, FieldValues } from 'react-hook-form';
import FieldWrapper from '../FieldWrapper/FieldWrapper';

interface Option {
	value: string;
	label: string;
}

interface Props<T extends FieldValues> {
	name: Path<T>;
	label?: string;
	options: Option[];
	placeholder?: string;
	helperText?: string;
	success?: string;
	required?: boolean;
	className?: string;
	isMulti?: boolean;
}

const InputTagField = <T extends FieldValues>({
	name,
	label,
	options,
	placeholder = 'Select...',
	helperText,
	success,
	required,
	className,
	isMulti = true,
}: Props<T>) => {
	const {
		setValue,
		getValues,
		formState: { errors },
	} = useFormContext();

	const handleChange = (
		selectedOptions: MultiValue<Option> | SingleValue<Option>
	) => {
		if (isMulti) {
			const values = (selectedOptions as MultiValue<Option>).map(
				(option) => option.value
			);
			setValue(name, values as any, { shouldValidate: true }); // Explicit cast for TypeScript
		} else {
			const value = (selectedOptions as SingleValue<Option>)?.value || null;
			setValue(name, value as any, { shouldValidate: true }); // Explicit cast for TypeScript
		}
	};

	const selectedValue = isMulti
		? options.filter((option) =>
				(getValues(name) as string[])?.includes(option.value)
		  )
		: options.find((option) => option.value === getValues(name));

	return (
		<FieldWrapper
			label={label}
			className={className}
			success={success}
			error={errors[name]?.message as string}
			helperText={helperText}
			required={required}
		>
			<Select
				isMulti={isMulti}
				options={options}
				placeholder={placeholder}
				value={selectedValue}
				onChange={handleChange}
				className='basic-multi-select'
				classNamePrefix='select'
				styles={{
					control: (base) => ({
						...base,
						border: 'none',
						boxShadow: 'none',
					}),
				}}
			/>
		</FieldWrapper>
	);
};

export default InputTagField;

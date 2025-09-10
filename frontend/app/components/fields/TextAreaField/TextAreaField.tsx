'use client';

import React from 'react';
import {
	FieldValues,
	Path,
	useFormContext,
	FieldError,
	UseFormRegisterReturn,
} from 'react-hook-form';
import classNames from 'classnames';
import FieldWrapper from '../FieldWrapper/FieldWrapper';

interface Props<T extends FieldValues> {
	name: Path<T>;
	label?: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	className?: string;
	register: UseFormRegisterReturn<string>;
	error?: FieldError;
}

const TextAreaField = <T extends FieldValues>({
	name,
	label,
	placeholder,
	required,
	disabled,
	className,
	register,
	error,
}: Props<T>) => {
	const {
		formState: { errors },
	} = useFormContext<T>();

	const fieldError = error || (errors[name] as FieldError | undefined);

	return (
		<FieldWrapper label={label} error={fieldError?.message} required={required}>
			<textarea
				{...register}
				data-qa='textarea'
				className={classNames(
					'w-full field border-none field-textarea resize-y rounded-md focus:outline-primary-dark',
					{
						'cursor-not-allowed bg-neutral-light text-neutral-dark': disabled,
					},
					className
				)}
				placeholder={placeholder}
				disabled={disabled}
			/>
		</FieldWrapper>
	);
};

export default TextAreaField;

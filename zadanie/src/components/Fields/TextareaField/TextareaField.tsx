import { FieldValues, Path, useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import FieldWrapper from '../FieldWrapper/FieldWrapper';

interface Props<T extends FieldValues> {
	name: Path<T>;
	label?: string;
	placeholder?: string;
	defaultValue?: string;
	disabled?: boolean;
	className?: string;
}

const TextAreaField = <T extends FieldValues>(props: Props<T>) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<FieldWrapper
			label={props.label}
			className={props.className}
			error={errors[props.name]?.message as string}
		>
			<textarea
				placeholder={props.placeholder}
				defaultValue={props.defaultValue}
				disabled={props.disabled}
				className={classNames(
					`w-full h-[120px] border-none px-[15px] py-[11px] rounded-md`,
					{
						'bg-gray-200 cursor-not-allowed': props.disabled,
					}
				)}
				{...register(props.name)}
			/>
		</FieldWrapper>
	);
};

export default TextAreaField;

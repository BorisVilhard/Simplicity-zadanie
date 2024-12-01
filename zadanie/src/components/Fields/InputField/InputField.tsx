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
	type?: string;
}

const InputField = <T extends FieldValues>(props: Props<T>) => {
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
			<input
				className={classNames(
					` h-[45px] w-full border-none px-[15px] opacity-100`,
					{
						'cursor-not-allowed bg-gray-200': props.disabled === true,
					}
				)}
				type={props.type}
				placeholder={props.placeholder}
				defaultValue={props.defaultValue}
				disabled={props.disabled}
				{...register(props.name)}
			/>
		</FieldWrapper>
	);
};

export default InputField;

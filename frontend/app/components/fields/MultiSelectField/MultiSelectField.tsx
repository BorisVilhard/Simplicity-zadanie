import classNames from 'classnames';
import React, { ReactNode, useMemo, useState, useEffect, useRef } from 'react';
import {
	FieldValues,
	Path,
	useFormContext,
	FieldError,
	PathValue,
} from 'react-hook-form';
import { IoIosArrowDown } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import FieldWrapper from '../FieldWrapper/FieldWrapper';

interface Props<T extends FieldValues> {
	name: Path<T>;
	label?: string;
	required?: boolean;
	error?: FieldError;
	items: { icon?: ReactNode; label: string; value: string }[];
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	onChange?: (value: string[]) => void;
}

const MultiSelectField = <T extends FieldValues>(props: Props<T>) => {
	const {
		setValue,
		watch,
		formState: { errors },
	} = useFormContext<T>();
	const [isOpen, setIsOpen] = useState(false);
	const currentValue = watch(props.name);
	const [selectedOptions, setSelectedOptions] = useState<string[]>(
		Array.isArray(currentValue) ? currentValue : []
	);
	const [inputValue, setInputValue] = useState('');
	const dropdownRef = useRef<HTMLDivElement>(null);
	const fieldError =
		props.error || (errors[props.name] as FieldError | undefined);

	useEffect(() => {
		setSelectedOptions(Array.isArray(currentValue) ? currentValue : []);
	}, [currentValue]);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionSelect = (
		option: { icon?: ReactNode; label: string; value: string },
		event: React.MouseEvent<HTMLLIElement, MouseEvent>
	) => {
		event.stopPropagation();
		const newSelected = [...selectedOptions];
		if (!newSelected.includes(option.value)) {
			newSelected.push(option.value);
			setInputValue('');
		}
		setSelectedOptions(newSelected);
		if (props.onChange) {
			props.onChange(newSelected);
		}
		setValue(props.name, newSelected as PathValue<T, typeof props.name>, {
			shouldValidate: true,
		});
	};

	const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && inputValue.trim()) {
			const newValue = inputValue.trim();
			const matchedItem = props.items.find(
				(item) =>
					item.label.toLowerCase() === newValue.toLowerCase() ||
					item.value.toLowerCase() === newValue.toLowerCase()
			);
			if (matchedItem && !selectedOptions.includes(matchedItem.value)) {
				setSelectedOptions([...selectedOptions, matchedItem.value]);
				setInputValue('');
				if (props.onChange) {
					props.onChange([...selectedOptions, matchedItem.value]);
				}
				setValue(
					props.name,
					[...selectedOptions, matchedItem.value] as PathValue<
						T,
						typeof props.name
					>,
					{
						shouldValidate: true,
					}
				);
			}
		}
	};

	const handleRemoveTag = (valueToRemove: string) => {
		const newSelected = selectedOptions.filter((v) => v !== valueToRemove);
		setSelectedOptions(newSelected);
		if (props.onChange) {
			props.onChange(newSelected);
		}
		setValue(props.name, newSelected as PathValue<T, typeof props.name>, {
			shouldValidate: true,
		});
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const selectedLabels = useMemo(() => {
		return props.items
			.filter((e) => selectedOptions.includes(e.value))
			.map((e) => e.label);
	}, [props.items, selectedOptions]);

	return (
		<FieldWrapper
			label={props.label}
			error={fieldError?.message}
			required={props.required}
			noBorder
		>
			<div
				ref={dropdownRef}
				data-qa='multiselect'
				className={classNames('relative w-full field', {
					'border-primary-dark': isOpen,
					'border-neutral-light': !isOpen,
				})}
			>
				<div
					className={classNames(
						'flex w-full cursor-pointer items-center rounded justify-between text-neutral-medium'
					)}
					onClick={handleToggle}
				>
					<div className='flex flex-wrap items-center gap-1.5'>
						{selectedLabels.map((label, index) => (
							<div
								key={index}
								className='flex gap-1 items-center text-neutral-dark bg-neutral-light rounded-sm px-2 py-[1px]'
							>
								{label}
								<IoClose
									className='ml-1 h-3 w-3 font-bold cursor-pointer'
									onClick={() =>
										handleRemoveTag(
											props.items.find((item) => item.label === label)?.value ||
												''
										)
									}
								/>
							</div>
						))}
						<input
							type='text'
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							onKeyDown={handleInputKeyDown}
							className='flex-1 border-none outline-none bg-transparent'
							placeholder={selectedLabels.length === 0 ? props.placeholder : ''}
							disabled={props.disabled}
						/>
					</div>
					<IoIosArrowDown
						className={classNames(
							'transform transition-transform duration-200 ease-in-out',
							{
								'rotate-180': isOpen,
							}
						)}
					/>
				</div>
				{isOpen && (
					<ul
						data-qa='select-options'
						className='absolute left-0 z-10 top-14 max-h-60 w-full overflow-auto rounded-md shadow-xl bg-white'
					>
						{props.items.map((option) => (
							<li
								key={option.value}
								className={classNames(
									'mx-1 my-1 flex cursor-pointer items-center gap-1 rounded px-3 py-2',
									{
										'font-bold': selectedOptions.includes(option.value),
									}
								)}
								onClick={(e) => handleOptionSelect(option, e)}
							>
								{option.icon} {option.label}
							</li>
						))}
					</ul>
				)}
			</div>
		</FieldWrapper>
	);
};

export default MultiSelectField;

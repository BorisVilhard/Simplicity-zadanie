import classNames from 'classnames';

import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	label?: string;
	error: ReactNode;
	success: ReactNode;
	helperText: ReactNode;
	required?: boolean;
	className?: string;
	noBorder?: boolean;
};

const FieldWrapper = ({
	label,
	error,
	children,
	className,
	noBorder,
}: Props) => {
	return (
		<div className={className}>
			<div className='mb-1 ml-1 font-semibold text-gray-500'>{label}</div>

			<div
				className={classNames(
					`rounded border-[1.5px] border-solid border-primary-20`,
					{
						'border-[2px] border-red-600': error,
					}
				)}
			>
				{children}
			</div>
			{error && (
				<div className='mt-1 flex flex-row items-center'>
					<div
						className={classNames(`ml-[7px]`, {
							'text-red-600': error,
						})}
					>
						{error}
					</div>
				</div>
			)}
		</div>
	);
};

export default FieldWrapper;

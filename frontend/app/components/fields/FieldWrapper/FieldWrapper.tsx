import classNames from 'classnames';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	label?: string;
	error: ReactNode;
	required?: boolean;
	noBorder?: boolean;
}

const FieldWrapper = ({ label, error, children, noBorder }: Props) => {
	return (
		<div data-qa='fieldwrapper'>
			<div className='mb-1 flex items-center '>
				<div className='text-sm font-semibold text-neutral-medium'>{label}</div>
			</div>
			<div
				className={classNames(`rounded`, {
					'border-2 border-error-dark': error,
					'border-none': noBorder,
					'border-2 border-solid border-neutral-light': !noBorder,
				})}
			>
				{children}
			</div>
			{error && (
				<div className='mt-1 flex flex-row items-center'>
					<div
						className={classNames(`ml-2`, {
							'text-error-dark': error,
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

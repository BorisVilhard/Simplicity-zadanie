import { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
	children: ReactNode;
	disabled?: boolean;
	htmlType?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	form?: string;
}

const Button = ({
	children,
	disabled,
	htmlType = 'button',
	form,
	onClick,
}: Props) => {
	return (
		<button
			onClick={onClick}
			data-qa='button'
			form={form}
			type={htmlType}
			className={classNames(
				'rounded-3xl cursor-pointer font-semibold py-2.5 px-5 bg-warning-dark text-neutral-dark transition ease-in-out',
				{
					'cursor-not-allowed border-neutral-light bg-neutral-light text-neutral-dark':
						disabled,
				}
			)}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;

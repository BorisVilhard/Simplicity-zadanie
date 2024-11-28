import { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
	children: ReactNode;
	disabled?: boolean;
	htmlType?: 'button' | 'submit';
	onClick?: () => void;
	form?: string;
}

const Button = ({ children, disabled, htmlType, form, onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			form={form}
			type={htmlType}
			className={classNames('px-5 py-3 rounded-full font-bold', {
				'cursor-not-allowed bg-gray-400 text-white': disabled,
				'bg-yellow-400 cursor-pointer text-black': !disabled,
			})}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;

import classNames from 'classnames';

interface Props {
	title?: string;
	description?: string;
}

const Header = (props: Props) => {
	return (
		<div>
			<h1
				className={classNames('text-xl font-[900]', {
					'mb-7': !props.description,
				})}
			>
				{props.title}
			</h1>
			<h1 className='text-[1rem] text-neutral-medium mb-3'>
				{props.description}
			</h1>
		</div>
	);
};

export default Header;

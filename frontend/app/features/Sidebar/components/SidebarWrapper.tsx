import { SidebarItemState } from '@/app/types';
import SideBarItem from './SidebarItem';
import { FaReact, FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import classNames from 'classnames';
import { useState } from 'react';

const SidebarWrapper = ({ items }: SidebarItemState) => {
	const [isOpen, setOpen] = useState<boolean>(true);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<>
			{!isOpen && (
				<button
					className='md:hidden absolute top-6 left-3'
					onClick={handleOpen}
				>
					<FaBars className='h-5 w-5' />
				</button>
			)}

			<div
				className={classNames(
					'top-0 left-0 w-full md:w-[20vw] h-[100vh] bg-sidebar-background font-semibold transform transition-transform duration-300 ease-in-out z-50 md:translate-x-0 fixed md:relative',
					{
						'translate-x-0': isOpen,
						'-translate-x-full': !isOpen,
					}
				)}
			>
				<div className='flex items-center justify-between m-5 gap-2'>
					<div className='flex items-center gap-2'>
						<FaReact className='h-6 w-6' />
						<h1>Test city</h1>
					</div>
					<button className='md:hidden' onClick={handleClose}>
						<IoClose className='h-7 w-7' />
					</button>
				</div>

				{items.map((item, key) => (
					<SideBarItem key={key} {...item} />
				))}
			</div>
		</>
	);
};

export default SidebarWrapper;

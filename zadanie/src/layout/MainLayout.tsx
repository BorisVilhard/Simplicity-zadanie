import React, { ReactNode } from 'react';

interface MainLayoutProps {
	children: ReactNode;
	title: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
	return (
		<div className='w-full'>
			<div className='bg-gray-300 my-[70px] w-full h-[1.5px]'></div>
			<div className='mx-[50px]'>
				<h1 className='text-[25px] mb-[80px] font-bold'>{title}</h1>
				<main>{children}</main>
			</div>
		</div>
	);
};

export default MainLayout;

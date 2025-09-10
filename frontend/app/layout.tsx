'use client';
import { useReducer, ReactNode, useEffect } from 'react';
import './globals.css';
import { geistMono, geistSans, lato } from './styles/Fonts';
import { AnnouncementReducer } from './context/Reducer';
import {
	AnnouncementContext,
	initialState,
} from './context/AnnouncementContext';
import Sidebar from './features/Sidebar/Sidebar';

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	const loadedState =
		typeof window !== 'undefined' && localStorage.getItem('announcements')
			? JSON.parse(localStorage.getItem('announcements')!)
			: initialState;

	const [state, dispatch] = useReducer(AnnouncementReducer, loadedState);

	// Mimickovanie databazy cez local storage
	useEffect(() => {
		localStorage.setItem('announcements', JSON.stringify(state));
	}, [state]);

	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} antialiased`}
			>
				<AnnouncementContext.Provider value={{ state, dispatch }}>
					<div className='flex'>
						<Sidebar />
						<div className='w-full'>
							<div className='h-0.5 w-full my-[8vh] bg-neutral-light' />
							<div className='mx-8'>{children}</div>
						</div>
					</div>
				</AnnouncementContext.Provider>
			</body>
		</html>
	);
}

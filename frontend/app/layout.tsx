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
	const [state, dispatch] = useReducer(AnnouncementReducer, initialState);

	// Pridali sme LOAD action aby sme neposielali do localstorage prazdne data, teda pri renderi nam zabezbecuje konzistentny stav
	useEffect(() => {
		const stored = localStorage.getItem('announcements');
		if (stored) {
			dispatch({ type: 'LOAD', payload: JSON.parse(stored) });
		}
	}, []);

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

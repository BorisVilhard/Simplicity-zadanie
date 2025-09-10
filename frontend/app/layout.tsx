'use client';
import { useReducer, ReactNode } from 'react';
import type { Metadata } from 'next';
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

	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} antialiased`}
			>
				<AnnouncementContext.Provider value={{ state, dispatch }}>
					<div className='flex'>
						<Sidebar /> {children}
					</div>
				</AnnouncementContext.Provider>
			</body>
		</html>
	);
}

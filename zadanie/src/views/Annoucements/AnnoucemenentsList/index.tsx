import React from 'react';
import { useAnnouncementStore } from '../../../store/AnnouncementStore';
import MainLayout from '../../../layout/MainLayout';
import List from './features/List/List';

const Announcements: React.FC = () => {
	const { data } = useAnnouncementStore();

	const sortedData = [...data].sort((a, b) => {
		const dateA = new Date(a.lastUpdate).getTime();
		const dateB = new Date(b.lastUpdate).getTime();
		return dateB - dateA;
	});

	return (
		<MainLayout title='Announcements'>
			<List data={sortedData} />
		</MainLayout>
	);
};

export default Announcements;

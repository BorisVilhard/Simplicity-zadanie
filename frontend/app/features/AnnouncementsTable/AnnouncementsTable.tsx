import List from './components/List';
import { useContext } from 'react';
import { AnnouncementContext } from '@/app/context/AnnouncementContext';
import { lastUpdatedAnnouncements } from '@/app/utils/sortItems';

const AnnouncementsTable = () => {
	const { state } = useContext(AnnouncementContext)!;

	return <List rowValues={lastUpdatedAnnouncements(state)} />;
};

export default AnnouncementsTable;

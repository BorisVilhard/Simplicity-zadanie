import MainLayout from '../../../layout/MainLayout';
import List from './features/List/List';
import { Announcement } from '../../../types';

type AnnouncementsProps = {
	data: Announcement[];
};

const Announcements = ({ data }: AnnouncementsProps) => {
	const sortedData = [...data].sort((a, b) => {
		const dateA = new Date(a.lastUpdate).getTime();
		const dateB = new Date(b.lastUpdate).getTime();

		if (isNaN(dateA) || isNaN(dateB)) {
			return 0;
		}

		return dateB - dateA;
	});

	return (
		<MainLayout title='Announcements'>
			<List data={sortedData} />
		</MainLayout>
	);
};

export default Announcements;

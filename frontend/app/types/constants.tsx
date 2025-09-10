import { CiVolume } from 'react-icons/ci';
import { SideBarItemValue } from '.';

export const SIDEBAR_PAGES: SideBarItemValue[] = [
	{
		icon: <CiVolume />,
		label: 'Announcements',
		url: '/Announcements',
	},
];

export const CATEGORY_ITEMS = [
	{ label: 'City', value: 'city' },
	{ label: 'Community events', value: 'community_events' },
];

export const TABLE_COLUMNS = [
	'Title',
	'Publication date',
	'Last update',
	'Categories',
];

import { CiVolume } from 'react-icons/ci';
import { SideBarItemValue } from '.';

export const SIDEBAR_PAGES: SideBarItemValue[] = [
	{
		icon: <CiVolume />,
		label: 'Announcements',
		url: '/Announcements',
	},
];

export const TABLE_COLUMNS = [
	'Title',
	'Publication date',
	'Last update',
	'Categories',
];

import { Announcement } from '../types';

export const data: Announcement[] = [
	{
		id: '1',
		title: 'Title 1',
		publicationDate: '2023-08-11T04:38:00Z',
		lastUpdate: '2023-08-11T00:00:00Z',
		categories: ['CommunityEvents'],
		content:
			'This is the content for Title 1. It provides details about the announcement.',
	},
	{
		id: '2',
		title: 'Title 2',
		publicationDate: '2023-08-11T04:36:00Z',
		lastUpdate: '2023-08-11T00:00:00Z',
		categories: ['CommunityEvents'],
		content:
			'This is the content for Title 2. It explains what the announcement is about.',
	},
	{
		id: '3',
		title: 'Title 3',
		publicationDate: '2023-08-11T04:35:00Z',
		lastUpdate: '2023-08-11T00:00:00Z',
		categories: ['CommunityEvents'],
		content:
			'This is the content for Title 3. It contains additional details for readers.',
	},
	{
		id: '4',
		title: 'Title 4',
		publicationDate: '2023-04-19T05:14:00Z',
		lastUpdate: '2023-04-19T00:00:00Z',
		categories: ['CommunityEvents'],
		content:
			'This is the content for Title 4. The announcement provides critical updates.',
	},
	{
		id: '5',
		title: 'Title 5',
		publicationDate: '2023-04-19T05:11:00Z',
		lastUpdate: '2023-04-19T00:00:00Z',
		categories: ['CommunityEvents'],
		content:
			'This is the content for Title 5. Stay informed with the latest updates.',
	},
	{
		id: '6',
		title: 'Title 6',
		publicationDate: '2023-04-19T05:11:00Z',
		lastUpdate: '2023-04-19T00:00:00Z',
		categories: ['CommunityEvents'],
		content:
			'This is the content for Title 6. It shares important insights for the audience.',
	},
	{
		id: '7',
		title: 'Title 7',
		publicationDate: '2023-03-24T07:27:00Z',
		lastUpdate: '2023-03-24T00:00:00Z',
		categories: ['CommunityEvents', 'Health'],
		content:
			'This is the content for Title 7. The announcement highlights health-related updates.',
	},
	{
		id: '8',
		title: 'Title 8',
		publicationDate: '2023-03-24T07:26:00Z',
		lastUpdate: '2023-03-24T00:00:00Z',
		categories: ['CommunityEvents', 'Health'],
		content:
			'This is the content for Title 8. It covers relevant topics for the community.',
	},
	{
		id: '9',
		title: 'Title 9',
		publicationDate: '2023-03-24T07:26:00Z',
		lastUpdate: '2023-03-24T00:00:00Z',
		categories: ['CommunityEvents', 'Health'],
		content:
			'This is the content for Title 9. Find out more about this important announcement.',
	},
	{
		id: '10',
		title: 'Title 10',
		publicationDate: '2023-03-24T07:26:00Z',
		lastUpdate: '2023-03-24T00:00:00Z',
		categories: ['CommunityEvents', 'Health'],
		content:
			'This is the content for Title 10. Stay updated with the latest announcements.',
	},
];

export const categoryOptions = [
	{ value: 'CommunityEvents', label: 'Community Events' },
	{ value: 'CrimeSafety', label: 'Crime & Safety' },
	{ value: 'Culture', label: 'Culture' },
	{ value: 'DiscountsBenefits', label: 'Discounts & Benefits' },
	{ value: 'Emergencies', label: 'Emergencies' },
	{ value: 'ForSeniors', label: 'For Seniors' },
	{ value: 'Health', label: 'Health' },
	{ value: 'KidsFamily', label: 'Kids & Family' },
];

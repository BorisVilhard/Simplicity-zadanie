import { AnnouncementState } from '../types';

export const lastUpdatedAnnouncements = (state: AnnouncementState) => {
	return [...state.items].sort(
		(a, b) =>
			new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime()
	);
};

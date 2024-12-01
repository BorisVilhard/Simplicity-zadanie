import { create } from 'zustand';
import { Announcement } from '../types';
import { data } from '../data';

interface AnnouncementState {
	data: Announcement[];
	setData: (newData: Announcement[]) => void;
	updateAnnouncement: (id: string, updatedData: Partial<Announcement>) => void;
}

export const useAnnouncementStore = create<AnnouncementState>((set) => ({
	data: data,
	setData: (newData: Announcement[]) => set({ data: newData }),
	updateAnnouncement: (id: string, updatedData: Partial<Announcement>) =>
		set((state: AnnouncementState) => ({
			data: state.data.map((item: Announcement) =>
				item.id === id
					? { ...item, ...updatedData, lastUpdate: new Date().toISOString() }
					: item
			),
		})),
}));

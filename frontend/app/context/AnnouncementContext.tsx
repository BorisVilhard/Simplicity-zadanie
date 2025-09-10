import { createContext } from 'react';
import { AnnouncementState } from '../types';
import { AnnouncementAction } from './Action';

export const initialState: AnnouncementState = {
	items: [],
};

interface AnnouncementContextType {
	state: AnnouncementState;
	dispatch: React.Dispatch<AnnouncementAction>;
}

export const AnnouncementContext = createContext<
	AnnouncementContextType | undefined
>(undefined);

import { AnnouncementState, RowValue } from '../types';

export type AnnouncementAction =
	| { type: 'ADD_ANNOUNCEMENT'; payload: RowValue }
	| { type: 'EDIT_ANNOUNCEMENT'; payload: { index: number; item: RowValue } }
	| { type: 'DELETE_ANNOUNCEMENT'; payload: { index: number } }
	| { type: 'LOAD'; payload: AnnouncementState };

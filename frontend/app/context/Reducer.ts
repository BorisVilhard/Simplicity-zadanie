import { AnnouncementState } from '../types';
import { AnnouncementAction } from './Action';

export const AnnouncementReducer = (
	state: AnnouncementState,
	action: AnnouncementAction
): AnnouncementState => {
	switch (action.type) {
		case 'ADD_ANNOUNCEMENT':
			return { items: [...state.items, action.payload] };
		case 'EDIT_ANNOUNCEMENT':
			return {
				items: state.items.map((item, i) =>
					i === action.payload.index ? action.payload.item : item
				),
			};
		case 'DELETE_ANNOUNCEMENT':
			return {
				items: state.items.filter((_, i) => i !== action.payload.index),
			};
		case 'LOAD':
			return action.payload;
		default:
			return state;
	}
};

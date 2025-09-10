import { ReactNode } from 'react';

export interface RowValue {
	title: string;
	publicationDate: string;
	lastUpdate: string;
	categories: string | string[];
}

export interface AnnouncementState {
	items: RowValue[];
}

export interface SideBarItemValue {
	label: string;
	icon: ReactNode;
	url: string;
}

export interface SidebarItemState {
	items: SideBarItemValue[];
}

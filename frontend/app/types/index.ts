export interface RowValue {
	title: string;
	publicationDate: string;
	lastUpdate: string;
	categories: string | string[];
}

export interface AnnouncementState {
	items: RowValue[];
}

import { format } from 'date-fns';

export const formatDateTime = (dateString: string): string => {
	return format(new Date(dateString), 'MMM dd, yyyy HH:mm');
};

export const formatDate = (dateString: string): string => {
	return format(new Date(dateString), 'MMM dd, yyyy');
};

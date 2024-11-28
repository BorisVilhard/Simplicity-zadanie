import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';
import { formatDate, formatDateTime } from '../../../../../utils/dateFormat';

interface ListItemProps {
	id: string;
	title: string;
	publicationDate: string;
	lastUpdate: string;
	categories: string[];
}

const ListItem: React.FC<ListItemProps> = ({
	id,
	title,
	publicationDate,
	lastUpdate,
	categories,
}) => {
	const navigate = useNavigate();

	return (
		<tr className='border-b hover:bg-gray-50'>
			<td className='py-4 px-6 text-sm text-gray-900'>{title}</td>
			<td className='py-4 px-6 text-sm text-gray-900'>
				{formatDateTime(publicationDate)}
			</td>
			<td className='py-4 px-6 text-sm text-gray-900'>
				{formatDate(lastUpdate)}
			</td>
			<td className='py-4 px-6 text-sm text-gray-900'>
				{categories.join(', ')}
			</td>
			<td className='py-4 px-4 text-right'>
				<button
					onClick={() => navigate(`/announcements/${id}`)}
					className='text-gray-500 hover:text-gray-700'
					aria-label='Edit'
				>
					<FaPen className='w-5 h-5' />
				</button>
			</td>
		</tr>
	);
};

export default ListItem;

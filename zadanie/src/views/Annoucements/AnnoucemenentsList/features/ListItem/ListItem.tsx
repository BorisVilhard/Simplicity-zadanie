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

const ListItem = ({
	id,
	title,
	publicationDate,
	lastUpdate,
	categories,
}: ListItemProps) => {
	const navigate = useNavigate();

	return (
		<tr className='border-b hover:bg-gray-50'>
			<td className='py-4 px-6 text-sm text-gray-900 truncate max-w-[200px] whitespace-nowrap'>
				{title}
			</td>
			<td className='py-4 px-6 text-sm text-gray-900'>
				{formatDateTime(publicationDate)}
			</td>
			<td className='py-4 px-6 text-sm text-gray-900'>
				{formatDate(lastUpdate)}
			</td>
			<td className='py-4 px-6 text-sm text-gray-900 overflow-x-auto whitespace-nowrap'>
				{categories.join(', ')}
			</td>
			<td className='py-4 px-4 text-right'>
				<button
					onClick={() => navigate(`/announcements/${id}`)}
					aria-label='Edit'
				>
					<FaPen className='w-5 h-5' />
				</button>
			</td>
		</tr>
	);
};

export default ListItem;

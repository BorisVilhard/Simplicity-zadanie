'use client';
import { RowValue } from '@/app/types';
import { FaPencilAlt } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import Td from './Td';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { AnnouncementContext } from '@/app/context/AnnouncementContext';

interface Props {
	row: RowValue;
	index: number;
}

const ListItem: React.FC<Props> = ({ row, index }) => {
	const router = useRouter();
	const { dispatch } = useContext(AnnouncementContext)!;

	const handleEdit = () => {
		router.push(`/Announcements/${index}`);
	};

	const handleDelete = () => {
		dispatch({ type: 'DELETE_ANNOUNCEMENT', payload: { index } });
	};

	return (
		<tr className='border-b-[1px] text-neutral-light'>
			<Td label={row.title} />
			<Td label={row.publicationDate} />
			<Td label={row.lastUpdate} />
			<Td label={row.categories} />

			<td className='ml-9 px-4 py-5 text-neutral-dark'>
				<FaPencilAlt
					onClick={handleEdit}
					className='cursor-pointer h-4 w-4 text-neutral-dark'
				/>
			</td>
			<td className='px-4 py-5 text-neutral-dark'>
				<MdDeleteOutline
					onClick={handleDelete}
					className='cursor-pointer h-6 w-6 text-error-dark'
				/>
			</td>
		</tr>
	);
};

export default ListItem;

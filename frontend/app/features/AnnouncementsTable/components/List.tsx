// AnnouncementsTable/features/List.tsx
import { RowValue } from '@/app/types';
import ListItem from './ListItem';
import { TABLE_COLUMNS } from '@/app/types/constants';
import Th from './Th';

interface Props {
	rowValues: RowValue[];
}

const AnnouncementTable = ({ rowValues }: Props) => {
	return (
		<table className='w-full text-neutral-dark px-5'>
			<thead>
				<tr className='border-y-[1px] border-neutral-light text-neutral-dark'>
					{TABLE_COLUMNS.map((e, index) => (
						<Th key={index} label={e} />
					))}
				</tr>
			</thead>
			<tbody>
				{rowValues.map((row, index) => (
					<ListItem key={index} row={row} index={index} />
				))}
			</tbody>
		</table>
	);
};

export default AnnouncementTable;

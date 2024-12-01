import ListItem from '../ListItem/ListItem';
import { Announcement } from '../../../../../types';

interface ListProps {
	data: Announcement[];
}

const List = ({ data }: ListProps) => {
	return (
		<div className='overflow-x-auto'>
			<table className='min-w-full border-collapse border border-x-transparent border-t-gray-200'>
				<thead>
					<tr>
						<th className='py-4 px-6 text-left text-sm font-bold'>Title</th>
						<th className='py-4 px-6 text-left text-sm font-bold'>
							Publication Date
						</th>
						<th className='py-4 px-6 text-left text-sm font-bold'>
							Last Update
						</th>
						<th className='py-4 px-6 text-left text-sm font-bold'>
							Categories
						</th>
						<th className='py-4 px-4 text-left text-sm font-bold'></th>
					</tr>
				</thead>
				<tbody>
					{data.map((item: Announcement) => (
						<ListItem key={item.id} {...item} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default List;

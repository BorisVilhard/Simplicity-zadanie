import React from 'react';
import ListItem from '../ListItem/ListItem';

interface ListProps {
	data: {
		id: string;
		title: string;
		publicationDate: string;
		lastUpdate: string;
		categories: string[];
	}[];
}

const List: React.FC<ListProps> = ({ data }) => {
	return (
		<div className='overflow-x-auto'>
			<table className='min-w-full border-collapse border border-x-transparent border-t-gray-200'>
				<thead>
					<tr>
						<th className='py-4 px-6 text-left text-sm font-bold'>Title</th>
						<th className='py-4 px-6 text-left text-sm font-bold'>
							Publication date
						</th>
						<th className='py-4 px-6 text-left text-sm font-bold'>
							Last update
						</th>
						<th className='py-4 px-6 text-left text-sm font-bold'>
							Categories
						</th>
						<th className='py-4 px-4 text-left text-sm font-bold'></th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<ListItem
							key={item.id}
							id={item.id}
							title={item.title}
							publicationDate={item.publicationDate}
							lastUpdate={item.lastUpdate}
							categories={item.categories}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default List;

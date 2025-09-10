'use client';
import AnnouncementsTable from '../features/AnnouncementsTable/AnnouncementsTable';
import Button from '@/app/components/Button/Button';
import { useRouter } from 'next/navigation';

const Announcementslist = () => {
	const router = useRouter();

	const handleCreate = () => {
		router.push('/Announcements/new');
	};

	return (
		<div className='w-full'>
			<div className='flex justify-between items-center my-8 mb-20'>
				<h1 className='text-2xl font-[900]'>Announcements</h1>
				<Button onClick={handleCreate}>Create New</Button>
			</div>

			<AnnouncementsTable />
		</div>
	);
};

export default Announcementslist;

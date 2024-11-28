import { FiVolume } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const isAnnouncementRoute =
		location.pathname === '/announcements' ||
		location.pathname.startsWith('/announcements/');

	return (
		<div className='w-[350px] bg-slate-50 h-screen'>
			<div className='flex items-center p-4'>
				<span className='ml-4 text-md font-semibold text-gray-700'>
					Test city
				</span>
			</div>

			<div className='mt-4'>
				<div
					className={`flex items-center p-4 cursor-pointer rounded-lg mx-4 ${
						isAnnouncementRoute ? 'bg-yellow-100' : 'bg-white'
					}`}
					onClick={() => navigate('/announcements')}
				>
					<FiVolume className='w-6 h-6' />
					<span className='ml-4 text-[15px] font-medium text-gray-700'>
						Announcements
					</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

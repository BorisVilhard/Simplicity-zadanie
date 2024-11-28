import { FiVolume } from 'react-icons/fi';
import Simplicity from '../../assets/simplicityLogo.svg';

const Sidebar = () => {
	return (
		<div className='w-64 bg-slate-50 h-screen shadow-lg'>
			<div className='flex items-center p-4 border-b'>
				<img
					src={Simplicity}
					alt='City Logo'
					style={{ width: '48px', height: '48px', borderRadius: '50%' }}
				/>

				<span className='ml-4 text-md font-semibold text-gray-700'>
					Test city
				</span>
			</div>

			<div className='mt-4'>
				<div className='flex items-center p-4 cursor-pointer bg-yellow-100 rounded-lg mx-4'>
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

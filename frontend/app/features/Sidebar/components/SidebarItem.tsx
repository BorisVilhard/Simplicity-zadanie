import { SideBarItemValue } from '@/app/types';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideBarItem = ({ label, icon, url }: SideBarItemValue) => {
	const pathName = usePathname();

	return (
		<Link
			href={url}
			className={classNames('mx-2 p-3 flex items-center gap-3 rounded', {
				'bg-warning-light': pathName === url,
				'bg-neutral-light': pathName !== url,
			})}
		>
			<span className='text-[20px]'>{icon}</span>
			<h1 className='font-semibold'>{label}</h1>
		</Link>
	);
};

export default SideBarItem;

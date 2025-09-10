import Link from 'next/link';

const Hello = () => {
	return (
		<div>
			Empty page. Go to: <Link href={'/Announcements'}>Announcements</Link>
		</div>
	);
};

export default Hello;

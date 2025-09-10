import AnnouncementForm from '@/app/features/AnnouncementsForm/AnnouncementsForm';

interface Props {
	params: { id: string };
}

const AnnouncementDetail = ({ params }: Props) => {
	return <AnnouncementForm id={params.id} />;
};

export default AnnouncementDetail;

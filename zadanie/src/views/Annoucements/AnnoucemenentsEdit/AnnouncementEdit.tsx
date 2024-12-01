import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useAnnouncementStore } from '../../../store/AnnouncementStore';
import MainLayout from '../../../layout/MainLayout';
import InputField from '../../../components/Fields/InputField/InputField';
import DateTimeInputField from '../../../components/Fields/DateTimeInputField/DateTimeInputField';
import InputTagField from '../../../components/Fields/InputTagField/InputTagField';
import TextAreaField from '../../../components/Fields/TextareaField/TextareaField';
import Button from '../../../components/Button/Button';
import { Announcement } from '../../../types';
import { categoryOptions } from '../../../data';

const schema = zod.object({
	title: zod.string().min(1, { message: 'Title is required' }),
	publicationDate: zod
		.string()
		.min(1, { message: 'Publication Date is required' })
		.refine((date) => !isNaN(Date.parse(date)), {
			message: 'Invalid date format',
		}),
	categories: zod
		.array(zod.string())
		.min(1, { message: 'At least one category is required' }),
	content: zod.string().min(1, { message: 'Content is required' }),
});

interface FormValues {
	title: string;
	publicationDate: string;
	categories: string[];
	content: string;
}

const AnnouncementEdit = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const { data, updateAnnouncement } = useAnnouncementStore();

	const methods = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			title: '',
			publicationDate: '',
			categories: [],
			content: '',
		},
	});

	const item: Announcement | undefined = data.find(
		(item: Announcement) => item.id === id
	);

	useEffect(() => {
		if (item) {
			methods.reset({
				title: item.title,
				publicationDate: new Date(item.publicationDate)
					.toISOString()
					.slice(0, 16),
				categories: item.categories,
				content: item.content || '',
			});
		}
	}, [item, methods]);

	const onSubmit: SubmitHandler<FormValues> = (formData) => {
		if (id) {
			updateAnnouncement(id, formData);
			navigate('/announcements');
		}
	};

	if (!item) {
		return <MainLayout title='Edit Announcement'>Item not found</MainLayout>;
	}

	const isFormDirty = Object.keys(methods.formState.dirtyFields).length > 0;

	return (
		<MainLayout title='Edit Announcement'>
			<FormProvider {...methods}>
				<form
					className='flex flex-col gap-4'
					onSubmit={methods.handleSubmit(onSubmit)}
				>
					<InputField name='title' label='Title' placeholder='Enter title' />
					<TextAreaField
						name='content'
						label='Content'
						placeholder='Write your content here'
					/>
					<InputTagField
						name='categories'
						label='Categories'
						options={categoryOptions}
						placeholder='Select categories'
					/>
					<DateTimeInputField
						name='publicationDate'
						label='Publication Date'
						placeholder='Select date and time'
					/>
					<div className='flex justify-end'>
						<Button htmlType='submit' disabled={!isFormDirty}>
							Publish
						</Button>
					</div>
				</form>
			</FormProvider>
		</MainLayout>
	);
};

export default AnnouncementEdit;

'use client';

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import MainLayout from '../../../layout/MainLayout';
import { Announcement } from '../../../types';
import InputField from '../../../components/Fields/InputField/InputField';
import DateTimeInputField from '../../../components/Fields/DateTimeInputField/DateTimeInputField';
import InputTagField from '../../../components/Fields/InputTagField/InputTagField';

import Button from '../../../components/Button/Button';
import TextAreaField from '../../../components/Fields/TextareaField/TextareaField';
import { categoryOptions } from '../../../data';

interface AnnouncementEditProps {
	data: Announcement[];
	setData: React.Dispatch<React.SetStateAction<Announcement[]>>;
}

interface FormValues {
	title: string;
	publicationDate: string;
	categories: string[];
	content: string;
}

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

const AnnouncementEdit: React.FC<AnnouncementEditProps> = ({
	data,
	setData,
}) => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const methods = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			title: '',
			publicationDate: '',
			categories: [],
			content: '',
		},
	});

	const item = data.find((item) => item.id === id);

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

	const onSubmit: SubmitHandler<FormValues> = (dataForm) => {
		const updatedData = data.map((d) => {
			if (d.id === id) {
				return {
					...d,
					...dataForm,
					lastUpdate: new Date().toISOString(),
				};
			}
			return d;
		});
		setData(updatedData);
		navigate('/announcements');
	};

	if (!item) {
		return (
			<MainLayout title='Edit Announcement'>
				<div className='p-4 text-center text-red-500'>Item not found</div>
			</MainLayout>
		);
	}

	return (
		<MainLayout title='Edit Announcement'>
			<FormProvider {...methods}>
				<form
					className='flex  w-[40vw] max-w-lg flex-col gap-4'
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
						label='Category'
						options={categoryOptions}
						placeholder='Select category'
					/>
					<DateTimeInputField
						name='publicationDate'
						label='Publication date'
						placeholder='Select date and time'
					/>
					<div className='w-full flex justify-end'>
						<Button htmlType='submit'>Publish</Button>
					</div>
				</form>
			</FormProvider>
		</MainLayout>
	);
};

export default AnnouncementEdit;

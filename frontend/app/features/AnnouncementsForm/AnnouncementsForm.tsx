'use client';

import Button from '@/app/components/Button/Button';
import InputField from '@/app/components/fields/InputField/InputField';
import MultiSelectField from '@/app/components/fields/MultiSelectField/MultiSelectField';
import TextAreaField from '@/app/components/fields/TextAreaField/TextAreaField';
import React, { useContext, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AnnouncementContext } from '@/app/context/AnnouncementContext';
import { RowValue } from '@/app/types';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header/Header';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CATEGORY_ITEMS } from '@/app/types/constants';

interface AnnouncementFormValues {
	title: string;
	content: string;
	categories: string[];
	publicationDate: string;
}

const announcementSchema = z.object({
	title: z.string().min(1, 'Pole je povinne'),
	content: z.string().min(1, 'Pole je povinne'),
	categories: z.array(z.string()).min(1, 'Pole je povinne'),
	publicationDate: z.string().min(1, 'Pole je povinne'),
});

interface Props {
	id?: string;
}

const AnnouncementForm = ({ id }: Props) => {
	const { state, dispatch } = useContext(AnnouncementContext)!;
	const router = useRouter();
	// Kontrolujeme ci ide o form pre editovanie alebo vytvaranie noveho formulara
	const isEdit = id !== 'new' && !!id;
	const index = isEdit ? parseInt(id!) : undefined;
	const existing = index !== undefined ? state.items[index] : undefined;

	const methods = useForm<AnnouncementFormValues>({
		resolver: zodResolver(announcementSchema),
		defaultValues: existing
			? {
					title: existing.title,
					content: existing.content || '',
					categories: existing.categories,
					publicationDate: existing.publicationDate,
			  }
			: {
					title: '',
					content: '',
					categories: [],
					publicationDate: new Date().toISOString().slice(0, 16),
			  },
	});

	const { handleSubmit, reset } = methods;

	useEffect(() => {
		if (existing) {
			reset({
				title: existing.title,
				content: existing.content || '',
				categories: existing.categories,
				publicationDate: existing.publicationDate,
			});
		}
	}, [existing, reset]);

	const onSubmit = (data: AnnouncementFormValues) => {
		const updatedItem: RowValue = {
			title: data.title,
			content: data.content,
			categories: data.categories,
			publicationDate: data.publicationDate,
			lastUpdate: new Date().toISOString().slice(0, 16),
		};
		if (isEdit && index !== undefined) {
			dispatch({
				type: 'EDIT_ANNOUNCEMENT',
				payload: { index, item: updatedItem },
			});
		} else {
			dispatch({ type: 'ADD_ANNOUNCEMENT', payload: updatedItem });
		}
		router.push('/Announcements');
	};

	const onInvalid = () => {
		alert('Vsetky polia su povinne.');
	};

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(onSubmit, onInvalid)}
				className='space-y-6 max-w-[40vw] mx-auto'
			>
				<h1 className='text-2xl font-[900]'>Edit Announcements</h1>
				<InputField<AnnouncementFormValues>
					name='title'
					label='Title'
					register={methods.register('title')}
					required
				/>
				<TextAreaField<AnnouncementFormValues>
					name='content'
					label='Content'
					register={methods.register('content')}
					required
				/>
				<div>
					<Header
						title='Categories'
						description='Select category so your users know what announcement is about.'
					/>
					<MultiSelectField<AnnouncementFormValues>
						name='categories'
						items={CATEGORY_ITEMS}
						required
					/>
				</div>
				<div>
					<Header title='Publication Date' />
					<InputField<AnnouncementFormValues>
						name='publicationDate'
						type='datetime-local'
						register={methods.register('publicationDate')}
						required
					/>
				</div>

				<div className='w-full text-end'>
					<Button htmlType='submit'>Publish</Button>
				</div>
			</form>
		</FormProvider>
	);
};

export default AnnouncementForm;

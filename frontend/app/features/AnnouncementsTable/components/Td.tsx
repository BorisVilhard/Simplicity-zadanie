interface Props {
	label: string | string[];
}

const Td = ({ label }: Props) => (
	<td className='px-1 py-5 text-neutral-dark truncate text-ellipsis'>
		{Array.isArray(label) ? label.join(',') : label}
	</td>
);

export default Td;

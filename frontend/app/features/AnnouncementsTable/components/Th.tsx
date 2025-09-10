interface Props {
	label: string;
}

const Th = ({ label }: Props) => (
	<td className='px-1 py-5 font-bold text-neutral-dark'>{label}</td>
);

export default Th;

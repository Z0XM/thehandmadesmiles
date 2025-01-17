import Link from 'next/link';

export default function Footer() {
	return (
		<div className='flex flex-row justify-center py-2 gap-2'>
			An effort by -
			<Link href='https://www.instagram.com/mukul.z' target='_blank' rel='noopener noreferrer'>
				z0xm
			</Link>
		</div>
	);
}

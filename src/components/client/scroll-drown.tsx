'use client';

import { CaretDoubleDown } from '@phosphor-icons/react';

export default function ScrollDown() {
	return (
		<CaretDoubleDown
			size={32}
			className='animate-bounce cursor-pointer'
			onClick={() => {
				const samples = document.querySelector('#samples');
				samples?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}}
		/>
	);
}

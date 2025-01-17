import Image from 'next/image';

export default function YearBookHome() {
	return (
		<div className='flex flex-col w-full'>
			<div className='flex flex-col w-full h-screen justify-center items-center'>
				<div className='text-center font-gabriel text-9xl tracking-widest'>
					c<span className='text-yb1'>.</span>l<span className='text-yb2'>.</span>a<span className='text-yb3'>.</span>s
					<span className='text-yb4'>.</span>s
					<br /> y<span className='text-yb5'>.</span>e<span className='text-yb6'>.</span>a
					<span className='text-yb4'>.</span>r<span className='text-yb3'>.</span>b<span className='text-yb2'>.</span>o
					<span className='text-yb1'>.</span>o<span className='text-yb6'>.</span>k
					<br />
				</div>
				<div className='text-center flex flex-row gap-2 text-md tracking-widest mt-4 justify-center items-center'>
					<Image src={'/icon/dark-smile.svg'} width={30} height={30} alt={''} />
					theHandMadeSmiles
				</div>
			</div>
		</div>
	);
}

import ScrollDown from '@/components/client/scroll-drown';
import Image from 'next/image';
import { Canvas } from '../client/canvas';

export default function Hero() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center">
            <Canvas />
            <Title />
            <div className="absolute bottom-32 flex justify-center">
                <ScrollDown />
            </div>
        </div>
    );
}

function Title() {
    return (
        <>
            <div className="text-center font-gabriel text-4xl tracking-widest sm:text-6xl md:text-8xl lg:text-9xl">
                c<span className="text-yb1">.</span>l<span className="text-yb2">.</span>a<span className="text-yb3">.</span>s
                <span className="text-yb4">.</span>s
                <br /> y<span className="text-yb5">.</span>e<span className="text-yb6">.</span>a<span className="text-yb4">.</span>r
                <span className="text-yb3">.</span>b<span className="text-yb2">.</span>o<span className="text-yb1">.</span>o
                <span className="text-yb6">.</span>k
                <br />
            </div>
            <div className="text-md mt-4 flex flex-row items-center justify-center gap-2 text-center tracking-widest">
                <Image src={'/icon/dark-smile.svg'} width={30} height={30} alt={''} />
                theHandMadeSmiles
            </div>
        </>
    );
}

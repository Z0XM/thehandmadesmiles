import Image from 'next/image';
import Link from 'next/link';

const A4Width = 595;
const A4Height = 842;
const sizeFactor = 0.5;

export default function Samples() {
    return (
        <div className="my-8 flex w-full flex-col items-center md:my-32">
            <div id="samples" className="flex w-full flex-row justify-center text-3xl underline">
                Our Best Samples
            </div>
            <div className="m-4 grid grid-cols-2 gap-4 sm:m-8 md:gap-6 lg:m-16 lg:grid-cols-4 lg:gap-12 xl:gap-16">
                {Array.from({ length: 8 }).map((_, i) => {
                    return (
                        <div key={`image${i}`} className={`z-[1] cursor-pointer rounded-md duration-200`}>
                            <Image
                                className={`rounded-md duration-200 hover:scale-125`}
                                src={`/yb-pages/page${i + 1}.png`}
                                alt=""
                                width={A4Width * sizeFactor}
                                height={A4Height * sizeFactor}
                                // fill={true}
                                // quality={100}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="flex w-full flex-row items-end justify-center gap-2 text-xl">
                Designed By{' '}
                <Link className="text-2xl underline" href={'https://www.imtiyazahmed.com'} target="_blank" rel="noopener noreferrer">
                    Imtiyaz Ahmed
                </Link>
            </div>
        </div>
    );
}

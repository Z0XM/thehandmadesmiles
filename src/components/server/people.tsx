import Image from 'next/image';

export default function People() {
    return (
        <div className="my-8 flex w-full flex-col items-center px-4 md:my-32">
            <div className="flex w-full flex-row justify-center text-3xl underline">People of YearBook</div>
            <div className="mt-8 flex flex-col items-center overflow-hidden rounded-md">
                <Image
                    src="/people.png"
                    className="z-[1] scale-110 cursor-pointer rounded-md duration-300 hover:scale-100"
                    quality={100}
                    width={1016}
                    height={550}
                    alt=""
                />
            </div>
        </div>
    );
}

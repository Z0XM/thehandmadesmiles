import { Quotes } from '@phosphor-icons/react/dist/ssr';

export default function Overview() {
    return (
        <div className="my-8 flex w-full flex-col items-center md:my-32">
            <div className="flex w-full flex-row justify-center text-3xl underline">Overview</div>
            <div className="flex w-[90%] flex-col items-center md:max-w-[70%] xl:max-w-[50%]">
                <div className="flex w-full justify-center gap-4 md:gap-8">
                    <span className="text-6xl md:text-9xl">
                        <Quotes className="scale-[-1]" weight="fill" />
                    </span>
                    <span className="mt-4 text-xl md:mt-8">
                        The Yearbook aims to capture and store moments, feelings along with thoughts of the people involved that have been
                        developed over the years with love, compassion with maybe some dislikes or fights. It tries to present it with a
                        creative vision for them to be loved, cherished and remembered forever for the years to come.
                    </span>
                </div>
                <div className="flex w-full justify-center gap-4 md:gap-8">
                    <span className="mt-4 text-xl md:mt-8">
                        This was a passion project of the curators for it to provide an emotional and personal touch to memories and people
                        which reflect only on digital space and media in the current present time and age.
                    </span>
                    <span className="text-6xl md:text-9xl">
                        <Quotes weight="fill" />
                    </span>
                </div>
                <div className="flex w-full justify-center gap-4 md:gap-8">
                    <span className="mt-4 text-xl md:mt-8">
                        With each new section and page of the book, we aim to recall, cherish and joy over the content and snapshots shared
                        by the people of the book.
                    </span>
                </div>
            </div>
        </div>
    );
}

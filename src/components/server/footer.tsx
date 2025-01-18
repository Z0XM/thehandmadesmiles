import Link from 'next/link';

export default function Footer() {
    return (
        <div className="my-4 flex flex-row justify-center gap-2 py-2 text-xl">
            An effort by -
            <Link href="https://www.instagram.com/mukul.z" target="_blank" rel="noopener noreferrer">
                z0xm
            </Link>
        </div>
    );
}

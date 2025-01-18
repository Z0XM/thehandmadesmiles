import Hero from '@/components/server/hero';
import Overview from '@/components/server/overview';
import People from '@/components/server/people';
import Samples from '@/components/server/samples';

export default function YearBookHome() {
    return (
        <div className="relative flex w-full flex-col">
            <Hero />
            <Samples />
            <Overview />
            <People />
        </div>
    );
}

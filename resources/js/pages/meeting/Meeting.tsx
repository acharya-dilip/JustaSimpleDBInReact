import { Head } from '@inertiajs/react';
import MeetingCard from '@/Components/MeetingCard';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Post from '@/Components/Post';
import Guard from '@/Components/Guard';

export default function Meeting({meetings}:{meetings:any}) {
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h1 className="text-7xl font-semibold leading-tight text-white dark:text-gray-200">
                        Meeting
                    </h1>
                    <Guard>
                        <form method={'get'} action={route('meeting.create')}>
                            <PrimaryButton type={'submit'} className={'bg-white'}>
                                <p className={'text-black'}>CREATE MEETING</p>
                            </PrimaryButton>
                        </form>
                    </Guard>
                </>
            }
        >
            <Head title="Meeting" />

            {meetings.map((meeting: any) => (
                <MeetingCard  key={meeting.id} meeting={meeting} />
            ))}
        </AuthenticatedLayout>
    );
}

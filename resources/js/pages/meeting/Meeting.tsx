import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Meeting() {
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h1 className="text-7xl font-semibold leading-tight text-white dark:text-gray-200">
                        Meeting
                    </h1>
                    <form method={'get'} action={route('meeting.create')}>
                        <PrimaryButton type={'submit'} className={'bg-white'}>
                            <p className={'text-black'}>CREATE MEETING</p>
                        </PrimaryButton>
                    </form>
                </>
            }
        >
            <Head title="Meeting" />
        </AuthenticatedLayout>
    );
}

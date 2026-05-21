import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Meeting() {
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h1 className="text-7xl font-semibold leading-tight text-gray-800">
                        Meeting
                    </h1>
                    <form>
                        <PrimaryButton type={'submit'}>
                            CREATE MEETING
                        </PrimaryButton>
                    </form>
                </>
            }
        >
            <Head title="Meeting" />
        </AuthenticatedLayout>
    );
}

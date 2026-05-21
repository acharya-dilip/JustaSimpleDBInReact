import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h1 className="text-7xl font-semibold leading-tight text-gray-800">
                        Members
                    </h1>
                </>
            }
        >
            <Head title="Dashboard" />
        </AuthenticatedLayout>
    );
}

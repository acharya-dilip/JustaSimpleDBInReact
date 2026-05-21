import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Members() {
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h1 className="text-7xl font-semibold leading-tight text-white dark:text-gray-200">
                        Members
                    </h1>
                </>
            }
        >
            <Head title="Members" />
        </AuthenticatedLayout>
    );
}

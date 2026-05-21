import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Admin() {
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h1 className="text-7xl font-semibold leading-tight text-gray-800">
                        Admin Pannel
                    </h1>
                </>
            }
        >
            <Head title="Admin" />
        </AuthenticatedLayout>
    );
}

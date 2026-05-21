import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import Container from '@/Components/Container';

export default function Admin() {
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h1 className={"text-7xl font-semibold leading-tight text-white dark:text-gray-200"}>
                        Admin Panel
                    </h1>
                </>
            }
        >
            <Head title="Admin" />


    <Container>

        <h1 className={"text-3xl font-bold"}>Member Enrollment</h1>


    </Container>

        </AuthenticatedLayout>
    );
}

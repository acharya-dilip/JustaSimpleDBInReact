import { Head } from '@inertiajs/react';
import Container from '@/Components/Container';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create(){

    return (
        <AuthenticatedLayout
            header={
                <h1 className="text-7xl font-semibold leading-tight text-white dark:text-gray-200">
                    Create Post
                </h1>
            }
        >
            <Head title="Create Post" />

            <Container className={''}>
                <form>
                    <h1 className="text-5xl font-semibold leading-tight text-white dark:text-gray-200">
                        Description:
                    </h1>
                </form>
            </Container>
        </AuthenticatedLayout>
    );

}

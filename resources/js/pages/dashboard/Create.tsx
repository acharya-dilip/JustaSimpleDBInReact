import { Head } from '@inertiajs/react';
import Container from '@/Components/Container';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create(){

    return(

    <AuthenticatedLayout
        header={
            <h1 className="text-7xl font-semibold leading-tight text-gray-800">
                Create Post
            </h1>
    }>
        <Head title="Create Post" />


    </AuthenticatedLayout>


    );

}

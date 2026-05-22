import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import Container from '@/Components/Container';
import Post from '@/Components/Post';
import EnrollmentCard from '@/Components/EnrollmentCard';

export default function Admin({members}:{members:any}) {
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h1
                        className={
                            'text-7xl font-semibold leading-tight text-white dark:text-gray-200'
                        }
                    >
                        Admin Panel
                    </h1>
                </>
            }
        >
            <Head title="Admin" />

            <Container className={"bg-gray-600 mt-4"}>
                <h1 className={'text-3xl font-bold flex whtie   text-5xl text-white justify-center'}>Member Enrollment</h1>

                {members.map((member: any) => (
                    <EnrollmentCard key={member.id} member={member} />
                ))}
            </Container>
        </AuthenticatedLayout>
    );
}

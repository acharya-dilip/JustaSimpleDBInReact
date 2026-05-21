import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Post from '@/Components/Post';

export default function Members({members}:{members:any}) {
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

            <div
                className={
                    'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4'
                }
            >
                {members.map((member: any) => (
                    <Post key={member.id} post={member} />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}

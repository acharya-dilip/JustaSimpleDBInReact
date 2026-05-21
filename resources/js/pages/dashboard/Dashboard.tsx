import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Container from '@/Components/Container';
import Post from '@/Components/Post';



export default function Dashboard(posts:any) {





    return (
        <AuthenticatedLayout
            header={
                <>
                    <h1 className="text-7xl font-semibold leading-tight text-white dark:text-gray-200">
                        Dashboard
                    </h1>
                    <form method={'get'} action={route('dashboard.Create')}>
                        <PrimaryButton type={'submit'} className={'bg-white'}>
                            <p className={'text-black'}>CREATE POST</p>
                        </PrimaryButton>
                    </form>
                </>
            }
        >
            <Head title="Dashboard" />

            {posts.map((post: { id: any }) => (
                <Post key={post.id} post={post} />
            ))}
        </AuthenticatedLayout>
    );
}



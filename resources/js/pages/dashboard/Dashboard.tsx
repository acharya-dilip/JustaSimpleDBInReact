import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Container from '@/Components/Container';



export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h1 className="font-semibold text-7xl text-gray-800 dark:text-gray-200 leading-tight">
                        Dashboard

                    </h1>
                    <form method={"get"} action={route('dashboard.Create')}>
                        <PrimaryButton type={"submit"}>
                                CREATE POST
                        </PrimaryButton>
                    </form>
                </>
            }>
            <Head title="Dashboard" />

        </AuthenticatedLayout>
    );
}

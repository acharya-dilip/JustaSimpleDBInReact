import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';



export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <>
                    <h1 className="text-7xl font-semibold leading-tight text-gray-800">
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

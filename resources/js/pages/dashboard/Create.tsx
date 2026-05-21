import { Head } from '@inertiajs/react';
import Container from '@/Components/Container';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import TextArea from '@/Components/TextArea';

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

            <Container className={'p-8 pb-4 mt-10 pt-4'}>
                <form method={"post"} action={route('dashboard.store')}>
                    <h1 className="mb-2 text-5xl font-semibold leading-tight text-white dark:text-gray-200">
                        Description:
                    </h1>

                    <TextArea
                        className={'w-full'}
                        name={'description'}
                    ></TextArea>

                    <h1 className="mt-4 text-5xl font-semibold leading-tight text-white mb-2 dark:text-gray-200">
                        Image:
                    </h1>
                    <input
                        type="file"
                        accept="image/*"
                        id="image"
                        name="image"
                        className={"ml-1"}
                        required
                    />

                    <br/>

                    <div className={"flex justify-end mt-4"}>
                        <PrimaryButton type={'submit'}>
                            <p className={"text-xl text-black"}>SUBMIT</p>
                        </PrimaryButton>
                    </div>



                </form>
            </Container>
        </AuthenticatedLayout>
    );

}

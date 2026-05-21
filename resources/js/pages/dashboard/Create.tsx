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

            <Container className={'mt-10 p-8 pb-4 pt-4'}>
                <form method={'post'} action={route('dashboard.store')} encType={'multipart/form-data'}>

                    <h1 className="mb text-5xl font-semibold leading-tight text-white dark:text-gray-200">
                       Title:
                    </h1>

                    <TextArea
                        className={'w-full mb-6'}
                        name={'title'}
                    ></TextArea>

                    <h1 className=" text-5xl font-semibold leading-tight text-white dark:text-gray-200">
                        Description:
                    </h1>

                    <TextArea
                        className={'w-full h-52'}
                        name={'description'}
                    ></TextArea>

                    <h1 className="mb-2 mt-4 text-5xl font-semibold leading-tight text-white dark:text-gray-200">
                        Image:
                    </h1>
                    <input
                        type="file"
                        accept="image/*"
                        id="image"
                        name="image"
                        className={'ml-1'}
                        required
                    />

                    <br />

                    <div className={'mt-4 flex justify-end'}>
                        <PrimaryButton type={'submit'}>
                            <p className={'text-xl text-black'}>SUBMIT</p>
                        </PrimaryButton>
                    </div>
                </form>
            </Container>
        </AuthenticatedLayout>
    );

}

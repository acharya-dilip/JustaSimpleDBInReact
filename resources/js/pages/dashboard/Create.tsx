import { Head, useForm } from '@inertiajs/react';
import Container from '@/Components/Container';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import TextArea from '@/Components/TextArea';

export default function Create(){

    const { data, setData, post, processing } = useForm({
        title: '',
        description: '',
        image: null as File | null,
    });


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
                <form
                    method={'post'}
                    action={route('dashboard.store')}
                    encType={'multipart/form-data'}
                >

                    {/*Equivalent of a csrf token*/}


                    <h1 className="mb text-5xl font-semibold leading-tight text-white dark:text-gray-200">
                        Title:
                    </h1>

                    <TextArea
                        className={'mb-6 w-full'}
                        name={'title'}
                    ></TextArea>

                    <h1 className="text-5xl font-semibold leading-tight text-white dark:text-gray-200">
                        Description:
                    </h1>

                    <TextArea
                        className={'h-52 w-full'}
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
                        <input type={'submit'} value={"SUBMIT"} className={"bg-white p-2 rounded-lg font-bold"} />
                    </div>
                </form>
            </Container>
        </AuthenticatedLayout>
    );

}

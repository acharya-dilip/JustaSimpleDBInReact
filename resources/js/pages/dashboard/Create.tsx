import { Head, useForm } from '@inertiajs/react';
import Container from '@/Components/Container';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import TextArea from '@/Components/TextArea';
import TextInput from '@/Components/TextInput';

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
                <form
                    method={'post'}
                    action={route('')}
                >

                    {/*Equivalent of a csrf token*/}

                    <div className="grid grid-cols-1 sm:grid-cols-2">

                        <div>
                            <h1 className="font-semibold text-4xl text-gray-800 dark:text-gray-200 leading-tight">
                                Date:
                            </h1>
                        </div>
                        <div>
                            <h1 className="font-semibold text-4xl text-gray-800 dark:text-gray-200 leading-tight">
                                Time:
                            </h1>
                        </div>
                        <div>
                            <TextInput id={"date"} type={"date"} name={"date"} className={"h-12 mt-1 font-bold text-2xl"}  required></TextInput>
                        </div>
                        <div>
                            <TextInput id={"time" } type={"time"} name={"time"} className={"h-12 mt-1 font-bold text-2xl"} required></TextInput>
                        </div>

                    </div>


                    <h1 className="font-semibold text-4xl text-gray-800 dark:text-gray-200 leading-tight mt-4">
                        Location:
                    </h1>
                    <TextInput id={"location"} name={"location"} className={"h-12 w-full mt-1 font-bold text-2xl "} required></TextInput>


                    <div className="grid grid-cols-1 sm:grid-cols-2">

                        <div>
                            <h1 className="font-semibold text-4xl text-gray-800 dark:text-gray-200 leading-tight mt-4">
                                Latitude
                            </h1>
                        </div>
                        <div>
                            <h1 className="font-semibold text-4xl text-gray-800 dark:text-gray-200 leading-tight mt-4">
                                Longitude
                            </h1>
                        </div>
                        <div>
                            <TextInput type={"number"} step={"any"} id={"latitude"} name={"latitude"} className={"h-12 mt-1 font-bold text-2xl"} required></TextInput>
                        </div>
                        <div>
                            <TextInput type={"number"} step={"any"} id={"longitude"} name={"longitude"} className={"h-12 mt-1 font-bold text-2xl"} required></TextInput>
                        </div>
                    </div>

                    <h1 className="font-semibold text-4xl text-gray-800 dark:text-gray-200 leading-tight mt-4">
                        Context:
                    </h1>
                    <TextArea className={"w-full h-36"} name={"context"} required></TextArea>


                    <div className={'mt-4 flex justify-end'}>
                        <input type={'submit'} value={"SUBMIT"} className={"bg-white p-2 rounded-lg font-bold"} />
                    </div>
                </form>
            </Container>
        </AuthenticatedLayout>
    );

}

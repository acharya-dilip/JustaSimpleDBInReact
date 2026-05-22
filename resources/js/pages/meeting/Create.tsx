import { Head, useForm } from '@inertiajs/react';
import Container from '@/Components/Container';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import TextArea from '@/Components/TextArea';
import TextInput from '@/Components/TextInput';

export default function Create() {
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
                <form method={'post'} action={route('meeting.store')}>


                    {/*Equivalent of a csrf token*/}
                    <input
                        type="hidden"
                        name="_token"
                        value={
                            document
                                .querySelector('meta[name="csrf-token"]')
                                ?.getAttribute('content') || ''
                        }
                    />

                    <h1 className="mb text-5xl font-semibold leading-tight text-white dark:text-gray-200">
                        Agenda:
                    </h1>

                    <TextInput
                        className={'mb-6 w-full'}
                        name={'agenda'}
                    ></TextInput>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <h1 className="text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                                Date:
                            </h1>
                        </div>
                        <div>
                            <h1 className="text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                                Time:
                            </h1>
                        </div>
                        <div>
                            <TextInput
                                id={'date'}
                                type={'date'}
                                name={'date'}
                                className={
                                    'mt-1 h-12 w-full text-2xl font-bold'
                                }
                                required
                            ></TextInput>
                        </div>
                        <div>
                            <TextInput
                                id={'time'}
                                type={'time'}
                                name={'time'}
                                className={
                                    'mt-1 h-12 w-full text-2xl font-bold'
                                }
                                required
                            ></TextInput>
                        </div>
                    </div>

                    <h1 className="mt-4 text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Location:
                    </h1>
                    <TextInput
                        id={'location'}
                        name={'location'}
                        className={'mt-1 h-12 w-full text-2xl font-bold'}
                        required
                    ></TextInput>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <h1 className="mt-4 w-full text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                                Latitude
                            </h1>
                        </div>
                        <div>
                            <h1 className="mt-4 w-full text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                                Longitude
                            </h1>
                        </div>
                        <div>
                            <TextInput
                                type={'number'}
                                step={'any'}
                                id={'latitude'}
                                name={'latitude'}
                                className={
                                    'mt-1 h-12 w-full text-2xl font-bold'
                                }
                                required
                            ></TextInput>
                        </div>
                        <div>
                            <TextInput
                                type={'number'}
                                step={'any'}
                                id={'longitude'}
                                name={'longitude'}
                                className={
                                    'mt-1 h-12 w-full text-2xl font-bold'
                                }
                                required
                            ></TextInput>
                        </div>
                    </div>

                    <h1 className="mt-4 text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Context:
                    </h1>
                    <TextArea
                        className={'h-36 w-full'}
                        name={'description'}
                        required
                    ></TextArea>

                    <div className={'mt-4 flex justify-end'}>
                        <input
                            type={'submit'}
                            value={'SUBMIT'}
                            className={'rounded-lg bg-white p-2 font-bold'}
                        />
                    </div>
                </form>
            </Container>
        </AuthenticatedLayout>
    );
}

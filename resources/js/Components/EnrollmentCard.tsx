import TextInput from '@/Components/TextInput';
import Container from '@/Components/Container';
import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function EnrollmentCard({ member }: { member: any }) {








    return (
        <form method="post" action={route('admin.update', member.id)}>
            <input
                type="hidden"
                name="_token"
                value={
                    document
                        .querySelector('meta[name="csrf-token"]')
                        ?.getAttribute('content') || ''
                }
            />
            <div
                className={
                    'm-4 grid grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4'
                }
            >
                <div>
                    {/*For Photos and stuffz*/}

                    <img
                        alt="member"
                        src={
                            member.image
                                ? `/storage/${member.image}`
                                : '/placeholder.png'
                        }
                        className="h-52 w-52 rounded-full object-cover"
                    />
                    <TextInput
                        className="mx-auto mt-2 w-52"
                        defaultValue={member.image}
                        name="image"
                        placeholder="Image path"
                    />
                </div>

                <div>
                    {/*FOr the name mail pass */}
                    <label className="mb-1 block text-white">Name</label>
                    <TextInput defaultValue={member.name} name="name" />

                    <label className="mb-1 block text-white">Email</label>
                    <TextInput defaultValue={member.email} name="email" />

                    <label className="mb-1 block text-white">Password</label>
                    <TextInput defaultValue={member.password} name="password" />
                </div>

                <div>
                    {/*For Role Number DOB    */}
                    <label className="mb-1 block text-white">Role</label>
                    <TextInput defaultValue={member.role} name="role" />

                    <label className="mb-1 block text-white">Number</label>
                    <TextInput defaultValue={member.number} name="number" />

                    <label className="mb-1 block text-white">DOB</label>
                    <TextInput defaultValue={member.dob} name="dob" />
                </div>

                <div>
                    {/*For ID Stack Submission    */}
                    <label className="mb-1 block text-white">ID</label>
                    <TextInput defaultValue={member.id} name="id" readOnly />

                    <label className="mb-1 block text-white">Tech Stack</label>
                    <TextInput
                        defaultValue={member.techStack}
                        name="techStack"
                    />

                    <label className="mb-1 block text-white">Submission</label>
                    <TextInput
                        defaultValue={member.created_at}
                        name="created_at"
                        readOnly
                    />

                        <div className={"flex justify-start gap-4 mx-a"}>
                            <input
                            type={'submit'}
                            value={'REMOVE'}
                            className={
                                'h-auto  w-24 mt-2 align-baseline rounded-lg bg-red-500 p-2 font-bold text-white'
                            }
                        />
                                <input
                                type={'submit'}
                                value={'UPDATE'}
                                className={
                                    'h-auto w-24 mt-2 align-baseline rounded-lg bg-green-600 p-2 font-bold text-white'
                                } />

                        </div>




                </div>
            </div>
        </form>
    );
}

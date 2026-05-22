import TextInput from '@/Components/TextInput';
import Container from '@/Components/Container';

export default function EnrollmentCard({ member }: { member: any }) {
    return (
        <Container className="mt-4 bg-gray-600 p-6">
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

                <div className="flex gap-6">
                    {/* Image */}
                    <div className="flex flex-col items-center">
                        <img
                            alt="member"
                            src={
                                member.image
                                    ? `/storage/${member.image}`
                                    : '/placeholder.png'
                            }
                            className="h-32 w-32 rounded-full object-cover"
                        />
                        <TextInput
                            className="mt-2 w-32"
                            value={member.image}
                            name="image"
                            placeholder="Image path"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex-1 space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="mb-1 block text-white">
                                    Name
                                </label>
                                <TextInput value={member.name} name="name" />
                            </div>
                            <div className="flex-1">
                                <label className="mb-1 block text-white">
                                    Email
                                </label>
                                <TextInput value={member.email} name="email" />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="mb-1 block text-white">
                                    Role
                                </label>
                                <TextInput value={member.role} name="role" />
                            </div>
                            <div className="flex-1">
                                <label className="mb-1 block text-white">
                                    Number
                                </label>
                                <TextInput
                                    value={member.number}
                                    name="number"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="mb-1 block text-white">
                                    DOB
                                </label>
                                <TextInput value={member.dob} name="dob" />
                            </div>
                            <div className="flex-1">
                                <label className="mb-1 block text-white">
                                    Tech Stack
                                </label>
                                <TextInput
                                    value={member.techStack}
                                    name="techStack"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="mb-1 block text-white">
                                    ID
                                </label>
                                <TextInput value={member.id} readOnly />
                            </div>
                            <div className="flex-1">
                                <label className="mb-1 block text-white">
                                    Submission
                                </label>
                                <TextInput value={member.created_at} readOnly />
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-2">
                        <button
                            type="submit"
                            className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                        >
                            Update
                        </button>
                        {/*<button*/}
                        {/*    type="button"*/}
                        {/*    className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"*/}
                        {/*>*/}
                        {/*    Delete*/}
                        {/*</button>*/}
                    </div>
                </div>
            </form>
        </Container>
    );
}

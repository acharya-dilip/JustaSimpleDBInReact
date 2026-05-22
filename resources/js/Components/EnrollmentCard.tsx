import TextInput from '@/Components/TextInput';
import Container from '@/Components/Container';

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
                    'm-4 grid grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5'
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
                        value={member.image}
                        name="image"
                        placeholder="Image path"
                    />
                </div>

                <div>
                    {/*FOr the name mail pass */}
                    <label className="mb-1 block text-white">Name</label>
                    <TextInput value={member.name} name="name" />

                    <label className="mb-1 block text-white">Email</label>
                    <TextInput value={member.email} name="email" />

                    <label className="mb-1 block text-white">Password</label>
                    <TextInput value={member.password} name="name" />
                </div>

                <div>
                    {/*For Role Number DOB    */}
                    <label className="mb-1 block text-white">Role</label>
                    <TextInput value={member.role} name="role" />

                    <label className="mb-1 block text-white">Number</label>
                    <TextInput value={member.number} name="number" />

                    <label className="mb-1 block text-white">DOB</label>
                    <TextInput value={member.dob} name="dob" />
                </div>

                <div>
                    {/*For ID Stack Submission    */}
                    <label className="mb-1 block text-white">ID</label>
                    <TextInput value={member.id} readOnly />

                    <label className="mb-1 block text-white">Tech Stack</label>
                    <TextInput value={member.techStack} name="techStack" />

                    <label className="mb-1 block text-white">Submission</label>
                    <TextInput value={member.created_at} readOnly />
                </div>
                <div>
                    {/*For Update Button    */}
                    <div className={"flex justify-center"}><input
                        type={'submit'}
                        className={
                            'rounded-lg bg-green-500 p-6 text-2xl font-bold text-white'
                        }
                    /></div>
                </div>
            </div>
        </form>
    );
}

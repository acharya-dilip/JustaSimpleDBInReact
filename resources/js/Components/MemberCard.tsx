import Container from '@/Components/Container';

export default function MemberCard({member}:{member:any}){

    const imagePath: string = '/storage/' + member.image;


    return (
        <div className={'mt-4 flex rounded-lg bg-gray-800 p-4'}>
            <div>
                {/*    Image and Name*/}
                <img src={imagePath} className={'size-48 rounded-full'} />
            </div>
            <div
                className={
                    'me-4 ms-4 w-full rounded-lg bg-gray-900 p-2 pb-4 pe-4 ps-4'
                }
            >
                {/*    Other info*/}

                <h1 className="mb-1 text-4xl font-semibold leading-tight text-white dark:text-gray-200">
                    {member.name}
                </h1>

                <div className={'rounded-lg bg-gray-700 p-2'}>
                    <h1
                        className={
                            'text-2xl font-semibold leading-tight text-white dark:text-gray-200'
                        }
                    >
                        {member.role}
                    </h1>
                    <h1 className={'text-2xl text-white truncate'}>{member.email}</h1>
                    <h1 className={'text-2xl text-white truncate'}>{member.number}</h1>
                </div>
            </div>
        </div>
    );


}

import Container from '@/Components/Container';

export default function MemberCard({member}:{member:any}){

    const imagePath: string = '/storage/' + member.image;


    return (
        <Container className={'mt-4 max-h-52'}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div>
                    <img alt='justanimage' src={imagePath}
                         className="rounded-full w-32 h-32"/>
                </div>
                <div>
                    <h2 className="text-2xl truncate">{member.role}</h2>
                    <h2 className="text-2xl truncate">{member.techStack} Developer</h2>
                    <h2 className="text-lg truncate"> {member.email}</h2>
                    <h2>{member.number}</h2>
                </div>
            </div>
            <h1 className="text-3xl truncate">{member.name}</h1>

        </Container>
    );


}

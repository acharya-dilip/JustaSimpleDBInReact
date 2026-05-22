import Container from '@/Components/Container';

export default function MeetingCard({meeting}:{meeting:any}){

    const MapLink :string =
        'https://maps.google.com/maps?width=600&height=400&hl=en&q='+meeting.latitude+'%2C%20'+meeting.longitude+'&t=&z=14&ie=UTF8&iwloc=B&output=embed';

    return (
        <div className="flex justify-center">
            <Container className={'mt-6'}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <h1 className="ml-2 text-5xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                            {meeting.agenda}{' '}
                        </h1>

                        <div className={'w-full rounded-lg bg-gray-900'}>
                            <h1 className="mt-2 p-4 text-3xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                                {meeting.date} at {meeting.time}
                            </h1>
                        </div>

                        <div className={'min-h-52 rounded-lg mt-2 p-2 bg-gray-900'}>
                            <h1 className="ml-3 mt-3 text-2xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                                {meeting.description}{' '}
                            </h1>
                        </div>
                    </div>
                    <div className="embed-map-fixed">
                        <iframe
                            src={MapLink}
                            className={'h-full w-full rounded-lg'}
                        ></iframe>
                    </div>
                </div>
            </Container>

            <div></div>
        </div>
    );

}

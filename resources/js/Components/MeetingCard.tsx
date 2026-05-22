import Container from '@/Components/Container';

export default function MeetingCard({meeting}:{meeting:any}){

    const MapLink :string =
        'https://maps.google.com/maps?width=600&height=400&hl=en&q='+meeting.latitude+'%2C%20'+meeting.longitude+'&t=&z=14&ie=UTF8&iwloc=B&output=embed';

    return(

        <div className="flex justify-center">
            <Container className={"mt-6"}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

                    <div>
                        <h1 className="font-semibold text-5xl ml-2 text-gray-800 dark:text-gray-200 leading-tight">
                            {meeting.title} </h1>

                        <h1 className=" bg-gray-800 font-semibold text-3xl p-4 text-gray-800 dark:text-gray-200 leading-tight mt-2">
                            {meeting.date} at {meeting.time} </h1>

                        <h1 className="font-semibold ml-3 text-2xl text-gray-800 mt-3 dark:text-gray-200 leading-tight">
                            {meeting.description} </h1>

                    </div>
                </div>
            </Container>

            <div>
                <div className="embed-map-fixed">
                    <div className="embed-map-container">
                        <iframe src={MapLink}>

                        </iframe>
                    </div>

                </div>
            </div>


        </div>




    );

}

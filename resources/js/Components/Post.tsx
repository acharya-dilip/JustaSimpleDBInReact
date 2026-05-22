import Container from '@/Components/Container';

export default function Post(props:any){

    const imagePath:string ="/storage/"+props.post.image_path;

    return (
        <Container className={'p-6'}>
            <div
                className={
                    'mb-2  flex w-full justify-start bg-gray-900 rounded-lg p-4'
                }
            >
                <h1 className="text-5xl font-semibold leading-tight text-white dark:text-gray-200">
                    {props.post.title}
                </h1>
            </div>
            <h1 className="mb-4 bg-gray-900 rounded-lg p-2 text-3xl font-semibold leading-tight text-white dark:text-gray-200">
                {props.post.description}
            </h1>
            <div className="mb-10 flex justify-center">
                <img
                    alt="justanimage"
                    src={imagePath}
                    className=" w-auto rounded"
                />
            </div>
        </Container>
    );

}

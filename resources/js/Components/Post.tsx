import Container from '@/Components/Container';

export default function Post(props:any){

    const imagePath:string ="/storage/"+props.post.image_path;

    return (
        <Container className={'p-6'}>
            <div
                className={
                    'mb-6  flex w-full justify-start bg-gray-900 p-4'
                }
            >
                <h1 className="text-5xl font-semibold leading-tight text-white dark:text-gray-200">
                    {props.post.title}
                </h1>
            </div>
            <h1 className="mb-4 text-2xl font-semibold leading-tight text-white dark:text-gray-200">
                {props.post.description}
            </h1>
            <div className="mb-10 flex justify-center">
                <img
                    alt="justanimage"
                    src={imagePath}
                    className="max-h-9xl w-auto rounded"
                />
            </div>
        </Container>
    );

}

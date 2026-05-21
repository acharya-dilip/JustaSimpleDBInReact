import { cn } from '@/lib/utils';

export default function Container(props:any){

    return (
        <>
            <div
                className={cn(
                    'mt-4 rounded-lg p-4 bg-gray-800 mx-auto ',
                    props.className
                )}
                style={{ maxWidth: '63%' }}
            >
                {props.children}
            </div>
        </>
    );

}

import { cn } from '@/lib/utils';

export default function Container(props:any){

    return(
        <div className={cn("bg-gray-800 rounded-lg mt-4",props.className)}>

            {props.children}

        </div>

    );

}

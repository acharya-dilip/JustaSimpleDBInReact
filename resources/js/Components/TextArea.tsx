import { cn } from '@/lib/utils';

export default function TextArea(props:any){

    return(

        <textarea required className={cn("font-bold text-2xl p-2 text-white h-20 rounded-lg bg-gray-700 w-full mt-2 border-gray-600",props.className) }>

        </textarea>

    );

}

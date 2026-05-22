import { usePage } from '@inertiajs/react';

export default function Guard(props:any) {
    const {auth}:any = usePage().props;

    return(


        auth.user.role==='Leader'?
    <>{props.children}</>:
            null
    );


}

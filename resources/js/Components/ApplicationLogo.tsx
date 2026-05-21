import type { ImgHTMLAttributes } from 'react';
import logo from './Prism_Launcher_logo.svg';

export default function ApplicationLogo(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            {...props}
            alt="Logo"
            src={logo}
        />
    );
}

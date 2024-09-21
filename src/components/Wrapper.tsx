import { ReactElement } from "react";

export default function Wrapper(props: { children: ReactElement, className?: string}) {
    return (
        <div className={`p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ${props.className}`}>
            {props.children}
        </div>
    );
}
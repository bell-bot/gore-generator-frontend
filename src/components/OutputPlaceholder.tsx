import Image from "next/image";
import placeholder from '../resources/sleeping_ham_v4.gif';

export default function OutputPlaceholder() {
    return (
        <div className="h-full w-full relative">
            <Image
                src={placeholder} alt={"placeholder"} layout="fill" objectFit="contain"/>

        </div>
    )
}
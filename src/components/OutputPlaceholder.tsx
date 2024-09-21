import placeholder from '../resources/sleeping_ham.gif'
import Image from "next/image";

export default function OutputPlaceholder() {
    return (
        <div className="h-full w-full relative">
            <Image
                src={placeholder} alt={"placeholder"} layout="fill" objectFit="contain"/>

        </div>
    )
}
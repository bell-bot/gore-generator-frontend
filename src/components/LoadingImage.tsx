import loadingSpinner from "../resources/loading-gif.gif"
import Image from "next/image";

export function LoadingImage() {
    return (
        <div className="h-full w-full relative">
            <Image
                src={loadingSpinner} alt={"Loading"} layout="fill" objectFit="contain"/>

        </div>
    )
}
import Image from "next/image";
import {DownloadButton} from "@/components/DownloadButton";

type OutputProps = {
    imageUrl: string;
}

export function Output({imageUrl}: OutputProps) {
    return (
        <div className="flex flex-col w-full gap-7 h-full">
            <div className="flex flex-auto relative w-full h-full">
                <Image src={imageUrl}  alt={"gore generator output"}
                       layout="fill"
                       objectFit="scale-down"
                />
            </div>
            <DownloadButton imageUrl={imageUrl} />
        </div>

    )
}
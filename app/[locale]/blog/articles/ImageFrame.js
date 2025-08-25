import Image from "next/image"

  export default function ImageFrame({image, description}) {
        return (
            <div className="max-w-[1200px] flex flex-col items-center">
                <Image loading="lazy" width={400} height={100} src={image} alt="image-metadata" />
                <p className="font-semibold text-sm mt-2"> {description} </p>
            </div>
        )
    }


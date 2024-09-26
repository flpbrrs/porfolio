import Image,{ StaticImageData } from "next/image";

interface FrameProps {
    img: StaticImageData
}

export default function ProfilePhotoFrame(props: FrameProps) {
    return (
        <div className='flex justify-center items-center relative'>
            <div className='
                bg-gradient-to-b from-amber-300 to-pink-800
                p-4 size-48 rounded-full bg-opacity-25 blur-lg animate-pulse'
            />
            <div className='
                p-1 rounded-full
                bg-gradient-to-br from-amber-300 to-pink-800
                absolute left-[50%] translate-x-[-50%]
                hover:scale-110 hover:bg-gradient-to-b hover:from-amber-400 hover:to-pink-800
                transition-all duration-700
          '>
                <div className='size-48 relative rounded-full overflow-hidden border-2 border-zinc-100'>
                    <Image
                        src={props.img}
                        fill
                        alt="Um foto de Felipe Jonathan"
                    />
                </div>
            </div>
        </div>
    )
}
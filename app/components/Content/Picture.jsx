import Image from 'next/image'

export default function Picture() {
    return(
        <>
            <div className="flex justify-end mix-blend-color-light">
                <Image
                  src="/pic2.jpg"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
        </>
    )
}
import Image from "next/image";

export default function Picture() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/image.jpg" alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

import Image from "next/image";

export const CloudIcon = ({ className }) => (
    <Image
        src="/images/cloud.png"
        alt="Google Cloud"
        width={24}
        height={24}
        className={className}
    />
);
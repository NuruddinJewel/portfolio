import Image from "next/image";

export const BetterAuthIcon = ({ className }) => (
    <Image
        src="/images/betterauth.png"
        alt="Better Auth"
        width={20}
        height={20}
        className={className}
    />
);
"use client";
import { useRouter } from "next/navigation";
import "styles/header.css";

export default function AvatarImage({ src, alt, className }) {
  const router = useRouter();
  const onImg = () => {
    router.replace("/");
  };
  return <img onClick={onImg} src={src} alt={alt} className={className} />;
}

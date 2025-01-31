import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <VideoCard
        imageLink="/coverImg.jpg"
        title="Master the art of building industry-standard software | 60 days"
        channelName="Techie"
        views="20Mn"
        timestamp="13 days ago"
        thumbnail="/thumbnail.jpg"
      />
    </div>
  );
}

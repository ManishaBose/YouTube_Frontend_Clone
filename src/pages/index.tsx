import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Videos = [
  {
    id: 1,
    imageLink: "/coverImg.jpg",
    title: "Master the art of building industry-standard software | 60 days",
    channelName: "Techie",
    views: "20Mn",
    timestamp: "13 days ago",
    thumbnail: "/thumbnail.jpg",
  },
  {
    id: 2,
    imageLink: "/coverImg.jpg",
    title: "Master the art of building industry-standard software | 60 days",
    channelName: "Techie",
    views: "20Mn",
    timestamp: "13 days ago",
    thumbnail: "/thumbnail.jpg",
  },
  {
    id: 3,
    imageLink: "/coverImg.jpg",
    title: "Master the art of building industry-standard software | 60 days",
    channelName: "Techie",
    views: "20Mn",
    timestamp: "13 days ago",
    thumbnail: "/thumbnail.jpg",
  },
  {
    id: 4,
    imageLink: "/coverImg.jpg",
    title: "Master the art of building industry-standard software | 60 days",
    channelName: "Techie",
    views: "20Mn",
    timestamp: "13 days ago",
    thumbnail: "/thumbnail.jpg",
  },
  {
    id: 5,
    imageLink: "/coverImg.jpg",
    title: "Master the art of building industry-standard software | 60 days",
    channelName: "Techie",
    views: "20Mn",
    timestamp: "13 days ago",
    thumbnail: "/thumbnail.jpg",
  },
  {
    id: 6,
    imageLink: "/coverImg.jpg",
    title: "Master the art of building industry-standard software | 60 days",
    channelName: "Techie",
    views: "20Mn",
    timestamp: "13 days ago",
    thumbnail: "/thumbnail.jpg",
  },
  {
    id: 7,
    imageLink: "/coverImg.jpg",
    title: "Master the art of building industry-standard software | 60 days",
    channelName: "Techie",
    views: "20Mn",
    timestamp: "13 days ago",
    thumbnail: "/thumbnail.jpg",
  },
  {
    id: 8,
    imageLink: "/coverImg.jpg",
    title: "Master the art of building industry-standard software | 60 days",
    channelName: "Techie",
    views: "20Mn",
    timestamp: "13 days ago",
    thumbnail: "/thumbnail.jpg",
  },
  {
    id: 9,
    imageLink: "/coverImg.jpg",
    title: "Master the art of building industry-standard software | 60 days",
    channelName: "Techie",
    views: "20Mn",
    timestamp: "13 days ago",
    thumbnail: "/thumbnail.jpg",
  },
];
export default function Home() {
  return (
    <div>
      <AppBar />
      <VideoGrid>
        {Videos.map((video) => {
          return <VideoCard key={video.id} {...video} />;
        })}
      </VideoGrid>
    </div>
  );
}

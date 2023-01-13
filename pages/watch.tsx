import type { NextPage } from "next";
import Link from "next/link";
import WatchLayout from "../components/WatchLayout";

const WatchPage: NextPage = () => (
  <WatchLayout title="Home | Black Oak TV">
    <div className="w-full h-[2250px] bg-yellow-300">WATCH NOW</div>
  </WatchLayout>
);

export default WatchPage;

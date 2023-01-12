import type { NextPage } from "next";
import Link from "next/link";
import WatchLayout from "../components/WatchLayout";

const WatchPage: NextPage = () => (
  <WatchLayout title="Home | Black Oak TV">
    <div className="w-full h-full ">WATCH NOW</div>
  </WatchLayout>
);

export default WatchPage;

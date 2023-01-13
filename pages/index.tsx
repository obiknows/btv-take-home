import type { NextPage } from "next";
// import Link from "next/link";
import Layout from "../components/Marketing";
// import { useSession } from "next-auth/react";

import HomeHero from "../components/partials/HomeHero";
import HomePreview from "../components/partials/HomePreview";

const IndexPage: NextPage = () => {
  // const { data: session } = useSession();

  return (
    <Layout title="Home | Black Oak TV">
      <div className="px-12 h-full text-white">
        <HomeHero />
        <HomePreview />
      </div>
    </Layout>
  );
};

export default IndexPage;

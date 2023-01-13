import type { NextPage } from "next";
// import Link from "next/link";
import Layout from "../components/Marketing";
// import { useSession } from "next-auth/react";

import HomeHero from "../components/partials/HomeHero";

const IndexPage: NextPage = () => {
  // const { data: session } = useSession();

  return (
    <Layout title="Home | Black Oak TV">
      <div className="px-12 h-full text-white">
        <HomeHero />
      </div>
    </Layout>
  );
};

export default IndexPage;

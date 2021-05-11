import React from "react";
import dynamic from "next/dynamic";

const DynamicChart = dynamic(() => import('../components/Chart'), {ssr: false});

export default function Home() {
  return <DynamicChart />;
}

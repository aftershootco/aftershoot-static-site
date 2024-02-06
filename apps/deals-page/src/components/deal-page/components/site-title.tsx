"use client";

import { siteIcon } from "@/assets/icons";
import Image from "next/image";

const SiteTitle = () => {
  const handleSitelogoClick = () => {
    const redirectURL = "http://aftershoot.com";
    window.location.href = redirectURL;
  };

  return (
    <div className="flex justify-center">
      <button className="">
        <Image src={siteIcon} alt="aftershoot" width={175} />
      </button>
    </div>
  );
};

export default SiteTitle;

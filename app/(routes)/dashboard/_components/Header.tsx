import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import React from "react";

function Header() {
  const { user }: any = useKindeBrowserClient();
  return (
    <div className="bg-blue-700 rounded-full text-white flex justify-center items-center h-[40px]">
      <span className="text-center">Created by || Shrey Sadhukhan</span>
    </div>
  );
}

export default Header;

'use client'

import { UserButton } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function WorkspaceHeader({ filename, onSave }) {
  return (
    <div className="p-4 flex justify-between shadow-md items-center">
    <Link href='/'>   <div className="flex items-center gap-3">
        <Image src="/logo.svg" alt="logo" width={30} height={120} />
        <span className="text-lg font-semibold">AI PDF Note Taker</span>
        <span className="text-lg text-gray-600 max-w-50 truncate">
          / 📄{filename}.pdf
        </span>
      </div>
      </Link>

      <div className="flex items-center gap-2">
        <Button onClick={onSave} className="flex gap-2 items-center cursor-pointer">
          Save
        </Button>
        <UserButton />
      </div>
    </div>
  );
}

export default WorkspaceHeader;
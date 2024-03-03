"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Socials } from "@/constants";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">&equiv;</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1OOZ7zVMmsqcEoiPKyuxVViRdWjNp1HAL/view?pli=1"
              target="_blank"
              className="text-right"
            >
              Resume
            </a>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1OOZ7zVMmsqcEoiPKyuxVViRdWjNp1HAL/view?pli=1"
              target="_blank"
              className="text-right"
            >
              Resume
            </a>
          </div>
          <div className="flex flex-wrap flex-row gap-2">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                onClick={() => window.open(social.onclick, "_blank")}
                width={24}
                height={24}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

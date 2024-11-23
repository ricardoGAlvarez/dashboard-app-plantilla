import Menu from "@/app/components/dashboard/menu";
import Navbar from "@/app/components/dashboard/navbar";
import { SchoolIcon } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/*Left */}
      <div className="w-[14%] md:w-[8%] xl:w-[14%]  p-4 ">
        <Link
          href="/dashboard"
          className="flex items-center justify-center lg:justify-start gap-4 text-gray-800 py-2"
        >
          <div className="">
            <SchoolIcon />
          </div>
          <span className="hidden xl:block">School</span>
        </Link>
        <Menu />
      </div>
      {/*Right */}
      <div className="w-[86%] md:w-[92%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

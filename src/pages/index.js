import Image from "next/image";
import { Inter } from "next/font/google";
import { AdminLayout } from "@/layout/AdminLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <AdminLayout>
      <div class="box crm-highlight-card">
        <div class="box-body">
          <div class="flex items-center justify-between">
            <div>
              <div class="font-semibold text-[1.125rem] text-white mb-2">
                Your target is incomplete
              </div>
              <span class="block text-[0.75rem] text-white">
                <span class="opacity-[0.7]">You have completed</span>
                <span class="font-semibold text-warning">48%</span>{" "}
                <span class="opacity-[0.7]">
                  of the given target, you can also check your status
                </span>
                .
              </span>
              <span class="block font-semibold mt-[0.125rem]">
                <a
                  class="text-white text-[0.813rem]"
                  href="javascript:void(0);"
                >
                  <u>Click here</u>
                </a>
              </span>
            </div>
            <div>
              <div id="crm-main"></div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

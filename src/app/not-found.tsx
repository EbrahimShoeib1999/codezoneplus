"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function GlobalNotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#0B0F12] text-white antialiased">
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#A3E635]/10 border border-[#A3E635]/30 text-[#A3E635] text-2xl font-black font-mono">
              404
            </div>

            <h1 className="text-3xl font-extrabold font-alexandria">
              الصفحة غير موجودة | Page Not Found
            </h1>

            <p className="text-sm text-neutral-400 leading-relaxed">
              عذراً، الرابط الذي تحاول الوصول إليه غير موجود أو تم نقله. يمكنك العودة للصفحة الرئيسية أو استعراض خدماتنا.
              <br />
              <span className="text-xs text-neutral-500 mt-1 block">
                The requested page does not exist or has been relocated.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/ar"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#A3E635] text-[#0B0F12] font-bold text-xs px-6 py-3 rounded-xl hover:bg-[#bef264] transition-all lime-glow"
              >
                <Home className="w-4 h-4" />
                <span>الرئيسية (عربي)</span>
              </Link>

              <Link
                href="/en"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-neutral-700 text-white font-semibold text-xs px-6 py-3 rounded-xl hover:border-[#A3E635] hover:text-[#A3E635] transition-all"
              >
                <span>English Home</span>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

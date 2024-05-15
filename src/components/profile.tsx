import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfileImg from "../../public/images/profile.png";

export default function Profile() {
  return (
    <section className="flex gap-4 px-2 bg-slate-100">
      <Image
        className="rounded-full"
        src={ProfileImg}
        alt="profile-image"
        width={100}
        height={100}
        layout="fixed"
        priority // 이 이미지가 가장 먼저 나타나도록 설정
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div>이자만</div>
          <div>이자주세요.</div>
        </div>
        <div className="flex justify-end">
          <Link href="/contact">
            <button className="bg-black text-white py-1 px-3 rounded-lg font-semibold">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

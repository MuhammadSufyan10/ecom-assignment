"use client";
import Banner from "@/components/banner";
import BreadCrumb from "@/components/breadcrumb";
import img1 from "../../../public/images/img1.png";
import Image from "next/image";
import img2 from "../../../public/images/img2.png";
import img3 from "../../../public/images/img3.png";
import imgProd1 from "../../../public/images/image 1.png";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <BreadCrumb title="Blog" />
      <div className="flex items-start container justify-center mt-4 gap-8">
        <div className="w-full space-y-4">
          <div className="w-full space-y-4">
            <Image
              src={img1}
              alt="im11"
              className="w-[1120px] h-[494px] rounded-lg"
            />
            <p className="text-2xl font-bold">
              Going all-in with millennial design
            </p>
            <p className="text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <p className="underline font-bold">Read More</p>
          </div>
          <div className="w-full space-y-4">
            <Image
              src={img3}
              alt="im11"
              className="w-[1120px] h-[494px] rounded-lg"
            />
            <p className="text-2xl font-bold">
              Going all-in with millennial design
            </p>
            <p className="text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <p className="underline font-bold">Read More</p>
          </div>
          <div className="w-full space-y-4">
            <Image
              src={img2}
              alt="im11"
              className="w-[1120px] h-[494px] rounded-lg"
            />
            <p className="text-2xl font-bold">
              Going all-in with millennial design
            </p>
            <p className="text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <p className="underline font-bold">Read More</p>
          </div>
        </div>
        <div className="w-1/4 space-y-4">
          <div className="space-y-4 my-12">
            <input
              type="text"
              placeholder="search"
              className="border rounded w-full p-2"
            />
            <h1 className="font-bold text-2xl">Category</h1>
            <div className="flex justify-between">
              <p>craft</p>
              <p>2</p>
            </div>
            <div className="flex justify-between">
              <p>Design</p>
              <p>4</p>
            </div>
            <div className="flex justify-between">
              <p>Wood</p>
              <p>7</p>
            </div>
            <div className="flex justify-between">
              <p>Interior</p>
              <p>1</p>
            </div>
          </div>
          <div className="my-12 space-y-4">
            <h1 className="font-bold text-2xl">Recent Posts</h1>
            <div className="flex items-center gap-4 w-2/3">
              <Image src={img1} alt="im11" className="w-[50px] rounded-lg" />
              <div>
                <h1>Going all-in with millennial design</h1>
                <p className="text-slate-400">03 Aug 2022</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src={img2} alt="im11" className="w-[50px] rounded-lg" />
              <div>
                <h1>Exploring new ways of decorating</h1>
                <p className="text-slate-400">03 Aug 2022</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src={img3} alt="im11" className="w-[50px] rounded-lg" />
              <div>
                <h1>Handmade pieces that took time to make</h1>
                <p className="text-slate-400">03 Aug 2022</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={imgProd1}
                alt="im11"
                className="w-[50px] rounded-lg"
              />
              <div>
                <h1>Modern home in Milan</h1>
                <p className="text-slate-400">03 Aug 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}

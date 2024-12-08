// components/BreadCrumb.js
import Image from "next/image";
import bg from "../../public/images/bg.png";
import logo from "../../public/images/logo.png";

const BreadCrumb = ({ title }: { title: string }) => {
  return (
    <div className="w-full">
      <Image src={bg} className="w-full bg-contain " alt="bg" />
      {/* Bottom BreadCrumb Section */}
      <div className="absolute top-[15%] flex flex-col items-center text-center w-full justify-center">
        <Image src={logo} alt="logo" />
        <h1 className="text-6xl font-bold">{title}</h1>
        <div className="flex items-center gap-4 mt-4">
          <p className="font-bold">Home </p>
          {">"}
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;

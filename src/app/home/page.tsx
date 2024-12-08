import Image from "next/image";
import img1 from "../../../public/images/img1.png";
import img2 from "../../../public/images/img2.png";
import img3 from "../../../public/images/img3.png";
import imgProd1 from "../../../public/images/image 1.png";
import imgProd2 from "../../../public/images/image 3.png";
import imgProd3 from "../../../public/images/image 4.png";
import imgProd4 from "../../../public/images/Image 5.png";
import imgCard1 from "../../../public/images/card1.png";
import imgCard2 from "../../../public/images/card2.png";
import ProductCard from "@/components/productCard";

export default function Home() {
  return (
    <>
      <div
        className="w-full h-[67vh] bg-cover bg-no-repeat rounded-lg overflow-hidden "
        style={{ backgroundImage: `url(./images/homeBanner.png)` }}
      >
        <div className="flex items-center justify-between w-full p-12">
          <div className="w-full"></div>
          <div className="bg-[#FFF3E3] w-2/3 mt-12">
            <div className="p-12 space-y-8">
              <p>New Arrival</p>
              <h1 className="text-4xl font-bold text-[#B88E2F]">
                Discover Our <br />
                New Collection
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <button className="h-[64px] w-[222px] bg-[#B88E2F] text-white">
                {" "}
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center p-12 items-center">
        <div className="block text-center">
          <h1 className="text-3xl font-bold text-[#333333]">
            Browse The Range
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex items-center gap-4 p-4">
            <div>
              <Image src={img1} alt="asd" className="rounded-lg" />
              <h1 className="pt-2 text-xl font-bold">Dining</h1>
            </div>
            <div>
              <Image src={img2} alt="asd" className="rounded-lg" />
              <h1 className="pt-2 text-xl font-bold">living </h1>
            </div>
            <div>
              <Image src={img3} alt="asd" className="rounded-lg" />
              <h1 className="pt-2 text-xl font-bold">Bedroom</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-6">
        <div className="justify-center w-full my-6 flex">
          <h1 className="text-4xl font-bold">Our Product</h1>
        </div>
        <div className="flex justify-center space-x-6">
          {/* Product Card 1 */}
          <ProductCard
            imageSrc={imgProd1} // Add your image path
            title="Product Title"
            description="This is a short"
            price="Rp 99.99"
            crossPrice="Rp 100.00"
          />
          {/* Product Card 2 */}
          <ProductCard
            imageSrc={imgProd2} // Add your image path
            title="Another Product"
            description="This is a description"
            price="Rp 79.99"
            crossPrice=""
          />
          {/* Product Card 2 */}
          <ProductCard
            imageSrc={imgProd3} // Add your image path
            title="Another Product"
            description="This is a description"
            price="Rp 79.99"
            crossPrice="Rp 100.00"
          />
          {/* Product Card 2 */}
          <ProductCard
            imageSrc={imgProd4} // Add your image path
            title="Another Product"
            description="This is a description"
            price="Rp 79.99"
            crossPrice=""
          />
        </div>
        <div className="justify-center w-full mt-6 flex">
          <button className="border-[#B88E2F] border-2  w-[222px] py-2 text-[#B88E2F]">
            Show More{" "}
          </button>
        </div>
      </div>
      <div className="p-12 bg-[#FCF8F3] flex w-full gap-4 items-center justify-center">
        <div className="space-y-6 pl-24 w-[60%]">
          <h1 className="font-bold text-4xl">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="w-[70%]">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="h-[64px] w-[222px] bg-[#B88E2F] text-white">
            Explore More
          </button>
        </div>
        <div className="flex gap-4 items-start w-full">
          <Image src={imgCard1} alt="asd" />
          <div
            className="absolute w-[157px] p-4"
            style={{
              transform: "translate(30px, 450px)",
              backgroundColor: "rgba(255, 255, 255, 0.72)",
            }}
          >
            <p className="text-slate-600">01 ------ Bedroom</p>
            <h1 className="font-bold text-xl">Inner Peace</h1>
          </div>
          <div
            className="absolute w-[48px] bg-[#B88E2F] p-2 text-white text-center"
            style={{
              transform: "translate(187px, 495px)",
            }}
          >
            <i className="fa fa-arrow-right"></i>
          </div>
          <Image src={imgCard2} alt="asd" />
        </div>
      </div>
      <div className="flex items-center justify-center text-center mt-4">
        <div>
          <p>Share your setup with</p>
          <h1 className="text-3xl font-bold text-[#333333]">
            #FuniroFurniture
          </h1>
          <div className="flex items-center gap-4 justify-center mt-4">
            <div className="block ">
              <div className="flex items-end gap-4 space-y-4">
                <Image src={img1} alt="asd" className="h-[382px] " />
                <Image src={img2} alt="asd" className="h-[312px]" />
              </div>
              <div className="flex items-start gap-4 mt-2">
                <Image src={imgCard2} alt="asd" className="h-[323px] w-auto" />
                <Image src={imgCard1} alt="asd" className=" h-[242px]" />
              </div>
            </div>
            <Image src={img3} alt="asd" className="h-[392px]" />
            <div className=" block">
              <div className="flex items-end gap-4 mt-2">
                <Image src={imgProd1} alt="asd" className="h-[348px]" />
                <Image src={imgProd2} alt="asd" className="h-[433px]" />
              </div>
              <div className="flex items-start gap-4 mt-2">
                <Image src={imgProd3} alt="asd" className="h-[242px]" />
                <Image src={imgProd4} alt="asd" className="h-[196px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

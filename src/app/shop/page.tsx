import BreadCrumb from "@/components/breadcrumb";
import ProductCard from "@/components/productCard";
import imgProd1 from "../../../public/images/image 1.png";
import imgProd2 from "../../../public/images/image 3.png";
import imgProd3 from "../../../public/images/image 4.png";
import imgProd4 from "../../../public/images/Image 5.png";
import Banner from "@/components/banner";

const Shop = () => {
  return (
    <div className="">
      <BreadCrumb title="Shop" />
      <div className="flex items-center justify-between bg-[#F9F1E7] w-full p-4 px-24">
        <div className="flex items-center gap-4 ">
          <div>
            <i className="fa fa-filter"></i> filter
          </div>
          <i className="fa fa-filter"></i>
          <i className="fa fa-filter"></i>
          <div>|</div>
          <div>Showing 1–16 of 32 results</div>
        </div>
        <div className="flex items-center gap-4 ">
          <div>
            show{" "}
            <select className="p-2">
              <option>16</option>
            </select>
          </div>
          <div>
            sort By{" "}
            <select className="p-2">
              <option>Default</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container-lg">
        <div className="flex flex-wrap justify-center gap-4 my-12">
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
          {/* Product Card 2 */}
          <ProductCard
            imageSrc={imgProd3} // Add your image path
            title="Another Product"
            description="This is a description"
            price="Rp 79.99"
            crossPrice="Rp 100.00"
          />
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
          {/* Product Card 2 */}
          <ProductCard
            imageSrc={imgProd4} // Add your image path
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
            imageSrc={imgProd3} // Add your image path
            title="Another Product"
            description="This is a description"
            price="Rp 79.99"
            crossPrice="Rp 100.00"
          />
        </div>
      </div>
      <div className="flex items-center w-full justify-center gap-4 my-12">
        <button className="bg-[#B88E2F] px-4   py-2 rounded">1</button>
        <button className="bg-[#F9F1E7] px-4 py-2 rounded">2</button>
        <button className="bg-[#F9F1E7] px-4 py-2 rounded">3</button>
        <button className="bg-[#F9F1E7] px-4 py-2 rounded">next</button>
      </div>
      <Banner />
    </div>
  );
};

export default Shop;

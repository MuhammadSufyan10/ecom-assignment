import Image from "next/image";

// components/ProductCard.js
const ProductCard = ({
  imageSrc,
  title,
  description,
  price,
  crossPrice,
}: {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  crossPrice: string;
}) => {
  return (
    <div className="w-[285px] overflow-hidden mt-4 bg-[#F4F5F7]">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-64 object-cover"
        />

        <div className="absolute top-2 right-2  bg-[#E97171] text-white text-xs font-semibold py-4 px-3 rounded-full">
          60%
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

        <p className="text-gray-600 mt-2">{description}</p>

        <div className="flex items-center gap-4 mt-2">
          <p className="text-lg font-bold text-gray-900">{price}</p>
          <p className="line-through text-slate-400">{crossPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

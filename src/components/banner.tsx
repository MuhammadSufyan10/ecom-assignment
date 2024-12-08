const Banner = () => {
  return (
    <div className="w-full flex items-center justify-center gap-12 bg-[#FAF3EA] p-12">
      <div className="w-full flex items-center gap-4">
        <i
          className="fa-sharp fa-thin fa-trophy fa"
          style={{ fontSize: "55px" }}
        ></i>
        <div>
          <p className="font-bold text-xl">High Quality</p>
          <p>crafted from top materials</p>
        </div>
      </div>
      <div className="w-full flex items-center gap-4">
        <i
          className="fa-sharp fa-thin fa-trophy fa"
          style={{ fontSize: "55px" }}
        ></i>
        <div>
          <p className="font-bold text-xl">Warranty Protection</p>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className="w-full flex items-center gap-4">
        <i
          className="fa-sharp fa-thin fa-trophy fa"
          style={{ fontSize: "55px" }}
        ></i>
        <div>
          <p className="font-bold text-xl">Free Shipping</p>
          <p>Order over 150 $</p>
        </div>
      </div>
      <div className="w-full flex items-center gap-4">
        <i
          className="fa-sharp fa-thin fa-trophy fa"
          style={{ fontSize: "55px" }}
        ></i>
        <div>
          <p className="font-bold text-xl">24 / 7 Support</p>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

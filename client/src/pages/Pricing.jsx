import Cardone from "@/utils/Cardone";
import Cardtwo from "@/utils/Cardtwo";

export const Pricing = () => {
  return (
    <div className="max-w-[1360px] m-auto mt-[100px] px-4">
      <h2 className="text-2xl font-semibold md:text-4xl text-center">
        Our Pricing & Plans
      </h2>
      <div className="w-full flex flex-wrap md:flex-nowrap justify-center items-center gap-6 md:gap-12 lg:gap-20 mt-8">
        <Cardone />
        <Cardtwo />
      </div>
    </div>
  );
};

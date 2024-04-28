import React from "react";
import Piechart from "../utils/Piechart";
const Rightbar = () => {
  return (
    <div className='w-[300px] min-h-screen hidden py-4 xl:block border-l'>
      <div className='w-full'>
      <Piechart />
      </div>
      <div className='w-full mt-5'>
      <Piechart />
      </div>
    </div>
  );
};

export default Rightbar;

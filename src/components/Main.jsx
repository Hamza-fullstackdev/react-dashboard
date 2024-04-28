import { Avatar, Badge } from "flowbite-react";
import React from "react";
import Linechart from "../utils/Linechart";

const Main = () => {
  return (
    <div className='w-full p-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        <div className='bg-purple-500 p-3 text-center rounded-xl'>
          <span className='text-sm text-white '>Avg First Reply Time</span>
          <div className='flex flex-row gap-2 justify-center text-center mt-5'>
            <h2 className='text-3xl text-white font-semibold'>30</h2>
            <span className='text-sm text-white'> h</span>
            <h2 className='text-3xl text-white font-semibold'>15</h2>
            <span className='text-sm text-white'> min</span>
          </div>
        </div>
        <div className='bg-blue-400 p-3 text-center rounded-xl'>
          <span className='text-sm text-white '>Avg Full Resolve Time</span>
          <div className='flex flex-row gap-2 justify-center text-center mt-5'>
            <h2 className='text-3xl text-white font-semibold'>22</h2>
            <span className='text-sm text-white'> h</span>
            <h2 className='text-3xl text-white font-semibold'>44</h2>
            <span className='text-sm text-white'> min</span>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <div className='w-full flex flex-row justify-between items-center bg-purple-500 p-1 px-4 rounded-3xl'>
            <Avatar
              rounded
              className='w-10 h-10 object-contain'
              img={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PVBbehIgurp7yUi8-YkelEqCToBGOsLKX9uOOjz5ow&s"
              }
            />
            <h3 className='text-white'>Messages</h3>
            <Badge color={"pink"}>10%</Badge>
          </div>
          <div className='w-full flex flex-row justify-between items-center bg-blue-400 p-1 px-4 rounded-3xl'>
            <Avatar
              rounded
              className='w-10 h-10 object-contain'
              img={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PVBbehIgurp7yUi8-YkelEqCToBGOsLKX9uOOjz5ow&s"
              }
            />
            <h3 className='text-white'>Emails</h3>
            <Badge color={"purple"}>33%</Badge>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Linechart/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        <div className='bg-purple-500 p-3 text-center rounded-xl'>
          <span className='text-sm text-white '>Avg First Reply Time</span>
          <div className='flex flex-row gap-2 justify-center text-center mt-5'>
            <h2 className='text-3xl text-white font-semibold'>30</h2>
            <span className='text-sm text-white'> h</span>
            <h2 className='text-3xl text-white font-semibold'>15</h2>
            <span className='text-sm text-white'> min</span>
          </div>
        </div>
        <div className='bg-blue-400 p-3 text-center rounded-xl'>
          <span className='text-sm text-white '>Avg Full Resolve Time</span>
          <div className='flex flex-row gap-2 justify-center text-center mt-5'>
            <h2 className='text-3xl text-white font-semibold'>22</h2>
            <span className='text-sm text-white'> h</span>
            <h2 className='text-3xl text-white font-semibold'>44</h2>
            <span className='text-sm text-white'> min</span>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <div className='w-full flex flex-row justify-between items-center bg-purple-500 p-1 px-4 rounded-3xl'>
            <Avatar
              rounded
              className='w-10 h-10 object-contain'
              img={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PVBbehIgurp7yUi8-YkelEqCToBGOsLKX9uOOjz5ow&s"
              }
            />
            <h3 className='text-white'>Messages</h3>
            <Badge color={"pink"}>10%</Badge>
          </div>
          <div className='w-full flex flex-row justify-between items-center bg-blue-400 p-1 px-4 rounded-3xl'>
            <Avatar
              rounded
              className='w-10 h-10 object-contain'
              img={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PVBbehIgurp7yUi8-YkelEqCToBGOsLKX9uOOjz5ow&s"
              }
            />
            <h3 className='text-white'>Emails</h3>
            <Badge color={"purple"}>33%</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

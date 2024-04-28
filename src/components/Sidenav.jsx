import React from "react";
import { Avatar, Button, Dropdown, Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiUser,
  HiInbox,
  HiArrowSmRight,
  HiArrowCircleLeft,
  HiViewBoards,
  HiDownload,
  HiShoppingBag,
} from "react-icons/hi";
const Sidenav = () => {
  return (
    <div className='w-[300px] min-h-screen hidden md:block'>
      <Sidebar aria-label='Sidebar' className='relative'>
        <Sidebar.Items>
          <Sidebar.ItemGroup className="flex flex-col gap-2">
            <div className='w-full flex justify-start border border-gray-200 p-2 rounded-xl gap-2 overflow-hidden mt-2'>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    className='w-12 h-12 object-contain'
                    img={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PVBbehIgurp7yUi8-YkelEqCToBGOsLKX9uOOjz5ow&s"
                    }
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <div className='flex flex-col text-start'>
                    <span className='block text-sm'>Hamza Ilyas</span>
                    <span className='block truncate text-sm font-medium'>
                      hamzailyas@gmail.com
                    </span>
                  </div>
                </Dropdown.Header>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
              <div className='flex flex-col'>
                <span className='text-sm'>Hamza Ilyas</span>
                <span className='whitespace-normal text-sm font-medium'>
                  hamzailyas@gmail.com
                </span>
              </div>
            </div>
            <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
            <Sidebar.Item icon={HiUser} label='User' labelColor='dark'>
              Profile
            </Sidebar.Item>
            <Sidebar.Item icon={HiInbox} label='3'>
              Inbox
            </Sidebar.Item>
            <Sidebar.Collapse icon={HiShoppingBag} label='E-commerce'>
              <Sidebar.Item href='#'>Products</Sidebar.Item>
              <Sidebar.Item href='#'>Sales</Sidebar.Item>
              <Sidebar.Item href='#'>Refunds</Sidebar.Item>
              <Sidebar.Item href='#'>Shipping</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item icon={HiViewBoards}>Report</Sidebar.Item>
            <Sidebar.Item icon={HiArrowSmRight}>Sign In</Sidebar.Item>
            <Sidebar.Item icon={HiArrowCircleLeft}>Sign out</Sidebar.Item>
            <div
              className='w-[230px]'
              style={{ position: "absolute", bottom: "2%" }}
            >
              <Button className='w-full bg-purple-500'>
                <HiDownload className='mr-1 h-4 w-4' /> Download
              </Button>
            </div>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default Sidenav;

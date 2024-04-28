import React from "react";
import { Avatar, Dropdown, Sidebar } from "flowbite-react";
import { HiChartPie } from "react-icons/hi";
const Sidenav = () => {
  return (
    <div className='w-[300px] min-h-screen'>
      <Sidebar aria-label='Sidebar'>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <div className='w-full flex justify-start border border-gray-200 p-2 rounded-xl gap-2'>
              <Dropdown arrowIcon={false} inline label={<Avatar
                  className='w-12 h-12 object-contain'
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PVBbehIgurp7yUi8-YkelEqCToBGOsLKX9uOOjz5ow&s"
                  }
                  rounded
                />}>
                <Dropdown.Item>
                <div className="flex flex-col text-start">
                <span className='block text-sm'>Bonnie Green</span>
                <span className='block truncate text-sm font-medium'>
                  name@flowbite.com
                </span>
                </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
              <div className=''>
                <span className='block text-sm'>Bonnie Green</span>
                <span className='block truncate text-sm font-medium'>
                  name@flowbite.com
                </span>
              </div>
            </div>
            <Sidebar.Item icon={HiChartPie} label='User' labelColor='dark'>
              Dashboard
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default Sidenav;

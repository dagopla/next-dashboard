import Image from 'next/image'
import React from 'react'
import { IoBrowsers, IoFootball, IoHeart, IoLogoReact, IoPerson } from 'react-icons/io5'
import { SidebarMenuItem } from './SidebarMenuItem'
import { ImSortNumbericDesc, ImSortNumericAsc } from 'react-icons/im'
export const menuItems = [
    {
        path: "/dashboard/main",
        title: "Dashboard",
        icon: <IoBrowsers size={30}/>,
        subTitle: "Data Overview"
    },
    {
        path: "/dashboard/counter",
        title: "Counter",
        icon: <ImSortNumericAsc size={30}/>,
        subTitle: "Counter Manager"
    },
    {
        path: "/dashboard/pokemons",
        title: "Pokemons",
        icon: <IoFootball size={30}/>,
        subTitle: "Pokemons Manager"
    },
    {
        path: "/dashboard/pokemons/favorites",
        title: "Favorites",
        icon: <IoHeart size={30}/>,
        subTitle: "Favorites Pokemons"
    }
]
export const Sidebar = () => {
    return (
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">Dash<span className="text-blue-500">8</span>.</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8" 
                        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                        width={50}
                        height={50}
                        alt=""/>
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        <IoPerson className="w-6 h-6 text-blue-500"/>
                        <span>
                            David GP
                            </span>
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {menuItems.map(item=>(
                    <SidebarMenuItem key={item.path} {...item}/>              
                ))}

            </div>
        </div>
    )
}

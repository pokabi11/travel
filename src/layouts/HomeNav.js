import React from 'react';
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/user-context";
import { Layout, theme } from 'antd';

const {Header} = Layout;

export default function HomeNav(props){
    const {state,setState} = useContext(UserContext);
    return(
        <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          width: '100%',
          fontSize: '18px',
          alignItems: 'center',
        }}
      >
            <div class="container mx-auto">
            <ul class="flex">
                <li class="flex-1">
                    <NavLink to="/" className="nav-link">
                        <a class="text-center block  rounded w-auto hover:bg-gray-200 text-white hover:font-bold hover:text-orange-700 transition duration-500">Trang Chủ</a>
                    </NavLink>
                </li>
                <li class="flex-1">
                    <NavLink to="/lichtrinh" className="nav-link">
                        <a class="text-center block  rounded w-auto text-white hover:border-gray-200 hover:bg-gray-200 hover:text-orange-700 transition duration-500">Lịch Trình</a>
                    </NavLink>
                </li>
                <li class="flex-1">
                    <NavLink to="/timve" className="nav-link">
                        <a class="text-center block  rounded w-auto text-white hover:border-gray-200 hover:bg-gray-200 hover:text-orange-700 transition duration-500">Tìm Vé</a>
                    </NavLink>
                </li>
                <li class="flex-1">
                    <NavLink to="/lienhe" className="nav-link">
                        <a class="text-center block  rounded w-auto text-white hover:border-gray-200 hover:bg-gray-200 hover:text-orange-700 transition duration-500">Liên hệ</a>
                    </NavLink>
                </li>
                <li class="flex-1">
                    <NavLink to="/vechungtoi" className="nav-link">
                        <a class="text-center block  rounded w-auto text-white hover:border-gray-200 hover:bg-gray-200 hover:text-orange-700 transition duration-500">Về chúng tôi</a>
                    </NavLink>
                </li>
            </ul>
            </div>

      </Header>

  );
}
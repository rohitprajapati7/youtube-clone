import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

function Header() {

    const dispatch = useDispatch();

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col m-2 p-2 shadow-md">
            <div className="flex justify-center items-center gap-4">
                <img src="./Hamburger_icon.png" className='cursor-pointer' alt="Hamburger_icon" width={50} height={50} onClick={() => toggleMenuHandler()} />
                <img src="./youtube_logo.svg" alt="youtube_logo" width={50} height={50} />
            </div>

            <div className="flex justify-center items-center">
                <input className="w-1/2 p-3 border border-gray-500 rounded-l-full" type="text"  placeholder="search" name="search" id="" />
                <button className="border p-3 border-gray-500 rounded-r-full">
                    <img src="/search_icon.png"  alt="search_icon" width={25} height={25} />
                </button>
            </div>

            <div className="flex justify-center items-center gap-4">
                <img src="./video_create_icon.png" alt="video_create_icon" width={50} height={50} />
                <img src="./notification_icon.png" alt="notification_icon" width={50} height={50} />
                <img src="./avatar_icon.png" alt="user_icon" width={50} height={50} />
            </div>
        </div>
    )
}

export default Header;
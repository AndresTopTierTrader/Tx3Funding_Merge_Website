import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { useWindowDimensions } from "@/utils/misc/getWindowDimensions";
import { MdKeyboardArrowDown } from "react-icons/md";

function Dropdown({ list, currentNavState, setCurrentNavState, setmobileMenuIsOpen, isNavbarShort }) {
    const dropdownRef = useRef(null);

    const [selectedStyles, setSelectedStyles] = useState('');
    const { width } = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedState, setSelectedState] = useState('');
    const [isDesktop, setIsDesktop] = useState(false);


    useEffect(() => {
        setSelectedStyles({
            selected: "text-textPrimary",
            unselected: `${isNavbarShort && 'text-textPrimary'} hover:text-textPrimary transition-all`
        });
    }, [width, isNavbarShort]);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isDesktop) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isDesktop]);

    useEffect(() => {
        setSelectedState(isOpen ? selectedStyles.selected : selectedStyles.unselected);
    }, [isOpen, selectedStyles]);

    let subSelectors = [];
    let name = "";

    if (list != null && list.sub != null) {
        name = list.title.toString();
        subSelectors = Object.values(list.sub);
    }

    useEffect(() => {
        setIsOpen(currentNavState === name);
    }, [currentNavState, name]);

    function handleDropdown() {
        setCurrentNavState(currentNavState === name ? "" : name);
    }

    function hideMenus() {
        if (setmobileMenuIsOpen) {
            setmobileMenuIsOpen(false);
        }
        setIsOpen(false);
    }

    return (
        <div className="flex flex-col items-start" ref={dropdownRef}>

            {/* Click to dropdown */}
            <button
                onClick={ () => {
                    handleDropdown()
                } }
                className={`flex flex-row w-full items-center justify-between px-8 ${isNavbarShort ? 'mb:px-8' : 'mb:px-3' } hover:text-textPrimary transition-all my-1 mb:my-0`}
            >
                <p className={`${selectedState} mb:text-textPrimary/90 font-light -ml-1 text-lg ${isNavbarShort ? 'mb:text-lg' : 'mb:text-base' } mb:text-base py-2`}>
                    {name.toString()}
                </p>
                <div className={`transform transition-transform duration-200 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <MdKeyboardArrowDown 
                        className={`${isNavbarShort ? 'mb:h-8 mb:w-8 mb:-ml-8' : 'mb:h-5 mb:w-5'} h-8 w-8 object-contain ${
                            isOpen ? 'text-textPrimary/90' : isNavbarShort ? 'text-textPrimary/90' : 'text-textPrimary/90'
                        }`} 
                    />
                </div>
            </button>

            <div 
                className={`
                    flex flex-col  ${isNavbarShort ? 'mb:flex mb:ml-10 ' : 'mb:fixed mb:mt-10'} mt-0  px-6 mb:px-0 
                    bg-transparent ${isNavbarShort ? 'mb:bg-transparent' : 'mb:bg-[#0B111D]'} rounded-lg md:rounded-b-lg
                    transition-all duration-200 ease-in-out mb:py-3
                    ${isOpen ? 'opacity-100 max-h-[500px] mb-5' : 'opacity-0 max-h-0 overflow-hidden'}
                `}
            >
                {subSelectors.map((item, i) => (
                    <div
                        key={`dropdown-item-${i}`}
                        className="flex flex-row w-full transition-all hover:rounded-b-lg"
                    >
                        <Link href={item.href} onClick={() => hideMenus()}>
                            <div className="flex flex-col">
                                <p className={`text-slate-300 ml-1 mb:ml-0 mb:text-base text-lg ${isNavbarShort ? 'mb:text-slate-300' : 'mb:text-slate-300 hover:text-textPrimary'} mb:px-6 py-2.5  transition-all duration-200 `}>
                                    {item.name}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dropdown;
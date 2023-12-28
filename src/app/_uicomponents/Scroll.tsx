'use client'
// Scroll.js
import React from "react";

const Scroll = ({
    targetId,
    children,
}: {
    targetId: string;
    children: any;
}) => {
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = targetElement.offsetTop;
            window.scrollTo({
                top: offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <button
            className=" cursor-pointer p-2  rounded-md "
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Scroll;

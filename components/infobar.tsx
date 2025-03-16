"use client";

import { useState, useEffect } from "react";

const InfoBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const isBarClosed = sessionStorage.getItem("infoBarClosed");
        if (isBarClosed === "true") {
            setIsVisible(false);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("infoBarClosed", "true");
    };

    if (!isVisible) return null;

    return (
        <div className="bg-indigo-950 flex items-center justify-center w-full text-center p-2 gap-x-2 text-white font-normal">
            <p>
                <a className="text-yellow-400">Kamar Sains</a> is coming soon to your hands!
            </p>
            <button
                onClick={handleClose}
                className=" text-red-600 hover:text-gray-300"
            >
                x
            </button>
        </div>
    );
};

export default InfoBar;
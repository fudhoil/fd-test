import React from 'react';
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

const TotalDisplay = ({
    icon,
    title,
    value,
}) => {
    return (
        <div className="bg-[#1C243F] rounded-lg px-[32px] py-[27px] flex flex-row flex-grow justify-between min-w-fit gap-2 inter h-fit">
            {/* icon */}
            {icon}
            <div className="flex flex-col gap-2">
                <p className="text-[#fff] text-[16px] font-bold">{title}</p>
                <p className="text-[#6C747D] text-[14px] font-medium whitespace-nowrap">{value}</p>
            </div>
        </div>
    );
}

export default TotalDisplay;

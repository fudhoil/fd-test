import React from 'react';
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

const TotalDisplay = ({
    icon,
    title,
    value,
    type = "secondary"
}) => {
    return (
        <div className={`${type === "primary" ? "bg-[#0BB885]" : "bg-[#1C243F]"} rounded-lg px-[32px] py-[27px] flex flex-row flex-grow justify-between min-w-fit gap-2 inter min-h-fit max-h-[191px]`}>
            {/* icon */}
            {icon}
            <div className="flex flex-col gap-2">
                <p className="text-[#fff] text-[16px] font-bold">{title}</p>
                <p className={`${type === "primary" ? "text-[#fff]" : "text-[#6C747D]"} text-[14px] font-medium whitespace-nowrap`}>{value}</p>
            </div>
        </div>
    );
}

export default TotalDisplay;

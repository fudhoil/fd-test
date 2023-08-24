import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useEffect, useState } from "react";

const EarningChart = () => {
    const [selectedWeek, setSelectedWeek] = useState('This Week');
    const [totalSales, setTotalSales] = useState(251);
    const [totalOrders, setTotalOrders] = useState(176);

    useEffect(() => {
        if (selectedWeek === 'This Week') {
            setTotalSales(251);
            setTotalOrders(176);
        } else if (selectedWeek === '2 Weeks Ago') {
            setTotalSales(165);
            setTotalOrders(147);
        } else if (selectedWeek === 'Last Month') {
            setTotalSales(120);
            setTotalOrders(119);
        }
    }, [selectedWeek]);

    return (
        <div className="bg-[#1C243F] rounded-lg p-[20px] gap-[25px] flex flex-col flex-grow justify-between max-w-[285px] inter min-h-[191px]">
            <div className="flex flex-row gap-2 justify-between items-center">
                <p className="text-[#fff] text-[16px] font-bold">Earnings</p>
                {/* dropdown */}
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger className="flex flex-row gap-1 items-center outline-none" onOpenChange={(open) => open ? setSelectedWeek('This Week') : setSelectedWeek('Last Week')}>
                        <p className="text-[#4C5A8B] text-[11px]">{selectedWeek}</p>
                        <img src="/icons/arrow-down.svg" alt="arrow-down" className="ml-auto" />
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                        <DropdownMenu.Content className='bg-[#2E4B85] rounded-lg flex flex-col overflow-hidden mt-2 min-w-[129px] max-h-[96px]'>
                            <DropdownMenu.Group className="flex flex-col overflow-y-auto">
                                <DropdownMenu.Item className="flex flex-row px-2 py-1 hover:bg-[#4E6799] hover:cursor-pointer gap-2 items-center justify-between outline-none" onSelect={() => setSelectedWeek('This Week')}>
                                    <p className="text-[#fff] text-[14px]">This Week</p>
                                    {selectedWeek === 'This Week' &&
                                        <div className='h-[15px] w-[6.45px] rounded-full bg-[#1C243F]' />
                                    }
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="flex flex-row px-2 py-1 hover:bg-[#4E6799] hover:cursor-pointer gap-2 items-center justify-between outline-none" onSelect={() => setSelectedWeek('2 Weeks Ago')}>
                                    <p className="text-[#fff] text-[14px]">2 Weeks Ago</p>
                                    {selectedWeek === '2 Weeks Ago' &&
                                        <div className='h-[15px] w-[6.45px] rounded-full bg-[#1C243F]' />
                                    }
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="flex flex-row px-2 py-1 hover:bg-[#4E6799] hover:cursor-pointer gap-2 items-center justify-between outline-none" onSelect={() => setSelectedWeek('Last Month')}>
                                    <p className="text-[#fff] text-[14px]">Last Month</p>
                                    {selectedWeek === 'Last Month' &&
                                        <div className='h-[15px] w-[6.45px] rounded-full bg-[#1C243F]' />
                                    }
                                </DropdownMenu.Item>
                            </DropdownMenu.Group>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>
            <div className="flex flex-row gap-6 justify-between m-auto">
                {/* charts */}
                {/* TODO: please use library for this */}
                <div className="bg-[#1C243F] rounded-lg w-[128.75px] relative">
                    {/* percentage circle */}
                    <div style={{
                        width: '120.75px',
                        height: '120.75px',
                        borderRadius: '50%',
                        backgroundColor: "#1F2849",
                        // border: '11px solid #0BB885',
                        background: `linear-gradient(calc((${totalSales}/330) * 360deg), #0BB885 calc(${totalSales}/330 * 100%), transparent calc(${totalSales}/330 * 100%)), linear-gradient(calc((${totalOrders}/330) * 360deg), #0BB885 calc(${totalOrders}/330 * 100%), #1F2849 calc(${totalOrders}/330 * 100%))`,
                        rotate: `90deg`,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '-11px',
                    }}>
                        <div style={{
                            width: '100.75px',
                            height: '100.75px',
                            borderRadius: '50%',
                            backgroundColor: '#1C243F',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                        }} />
                    </div>
                    <div style={{
                        width: '85.72px',
                        height: '85.72px',
                        borderRadius: '50%',
                        backgroundColor: '#FF814A',
                        // border: '11px solid #0BB885',
                        background: `linear-gradient(calc((${totalOrders}/330) * 360deg), #FF814A calc(${totalOrders}/330 * 100%), #1F2849 calc(${totalOrders}/330 * 100%))`,
                        rotate: `90deg`,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '7px',
                        left: '18px',
                    }}>
                        <div style={{
                            width: '70.72px',
                            height: '70.72px',
                            borderRadius: '50%',
                            backgroundColor: '#1C243F',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            top: '8px',
                            left: '8px',
                        }} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 m-auto">
                    <div className="flex flex-row gap-3 items-center">
                        <div className='w-[8.13px] h-[8.13px] rounded-full bg-[#0BB885]' />
                        <div className="flex flex-col gap-2">
                            <p className="text-[#fff] text-[12px] font-normal">Total Sales</p>
                            <p className="text-[#8A92A6] text-[14px] font-medium">{totalSales}K</p>
                        </div>
                    </div>
                    {/* dropdown */}
                    <div className="flex flex-row gap-3 items-center">
                        <div className='w-[8.13px] h-[8.13px] rounded-full bg-[#FF814A]' />
                        <div className="flex flex-col gap-2">
                            <p className="text-[#fff] text-[12px] font-normal">Total Orders</p>
                            <p className="text-[#8A92A6] text-[14px] font-medium">{totalOrders}K</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default EarningChart;

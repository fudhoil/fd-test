const OrderChart = () => {
    return (
        // TODO: change this img to real Chart
        <div className='bg-[#1C243F] px-[21.22px] py-[18.97px]  rounded-lg flex flex-row flex-grow justify-between max-w-[150px] gap-2 inter'>
            {/* <img src="/cards/growth-card.png" alt="growth" className="w-full" /> */}
            <div className="flex flex-col gap-2">
                <p className="text-[#fff] text-[16.6px] font-medium">Orders</p>
                <span className="text-[#FF814A] text-[28.46px] font-medium">189K</span>
            </div>

            {/* TODO: chart */}
        </div>
    );
}

export default OrderChart;

const DashboardLayout = ({
    children,
}) => {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <h1 className="text-[#fff] text-[20px] font-bold p-4">Marketing Dashboard</h1>
            {children}
        </div >
    );
}

export default DashboardLayout;

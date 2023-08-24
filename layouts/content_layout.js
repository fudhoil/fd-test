import Footer from "@/components/footer";
import Header from "@/components/header";

const ContentLayout = ({
    children,
}) => {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header />
            {children}
            <Footer />
        </div >
    );
}

export default ContentLayout;

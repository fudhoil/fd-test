import Footer from "@/components/footer";
import Header from "@/components/header";

const ContentLayout = ({
    children,
}) => {
    return (
        <div className="flex flex-col w-full h-full">
            <Header />
            {children}
            <Footer />
        </div >
    );
}

export default ContentLayout;

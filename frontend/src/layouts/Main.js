import Footer from "@/components/page_components/Footer";
import Sidebar from "@/components/page_components/SideBar";
import Head from "next/head";
import ContentDiv from "./Content";

const MainLayout = () => {
    return ( 
        <>
    <Head>
    </Head>
    <Sidebar/>
    <ContentDiv/>
    <Footer/>
    </>
     );
}
 
export default MainLayout;
import { Sidebar } from "../layouts/sidebar";
import { Header } from "../layouts/header";

import { cn } from "../utils/cn"; 
import { Outlet } from "react-router-dom";

const Layout = () => {
    return ( 
<div className="min-h-screen bg-slate-100 transition-colors">
    <Sidebar />
        <div className={cn("transition-[margin] duration-300")}>
            <Header />
            <div className="has-[calc(100vh-60px)] overflow-auto overflow-x-hidden p-6">
                <Outlet/>
            </div>
        </div>
    </div>
    );
};


export default Layout;
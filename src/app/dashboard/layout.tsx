import { Sidebar } from "../../components";

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
                <div className="flex flex-col relative w-screen">
                    <Sidebar/>
                    <div id="content" className="ml-64">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
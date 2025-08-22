import {TitleBar} from "./TitleBar";
import {Sidebar} from "./Sidebar";
import {CodeEditor} from "./CodeEditor";
import {Tabs} from "./Tabs";
import {Breadcrumb} from "./Breadcrumb";
import {Terminal} from "./Terminal";
import {StatusBar} from "./StatusBar";
import {useStack} from "@/context/useStack";

export function VsCodeWindow() {
    const {showTerminal} = useStack();

    return (
        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border border-gray-800">
            <TitleBar/>
            <div className="flex h-[600px]">
                <Sidebar/>
                <div className="flex-1 bg-[#1e1e1e] flex flex-col">
                    <Tabs/>
                    <Breadcrumb/>
                    <CodeEditor/>
                    {showTerminal && <Terminal/>}
                </div>
            </div>
            <StatusBar/>
        </div>
    );
}

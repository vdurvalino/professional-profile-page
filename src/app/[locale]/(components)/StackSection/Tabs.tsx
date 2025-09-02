import {FileText, X} from "lucide-react";
import {useStack} from "@/context/useStack";

export function Tabs() {
    const {openTabs, activeFile, setActiveFile, closeTab} = useStack();

    return (
        <div className="bg-neutral-800 border-b border-gray-800 flex items-center">
            {openTabs.map(( tab ) => (
                <div
                    key={tab}
                    className={`px-4 py-2 text-sm flex items-center gap-2 border-r border-gray-800 cursor-pointer group ${
                        activeFile === tab ? 'bg-neutral-900 text-white' : 'text-gray-400 hover:bg-neutral-800'
                    }`}
                    onClick={() => setActiveFile(tab)}
                >
                    <FileText size={14}/>
                    <span>{tab}</span>
                    <X
                        size={14}
                        className="opacity-0 group-hover:opacity-100 hover:bg-neutral-700 rounded transition-opacity"
                        onClick={( e ) => {
                            e.stopPropagation();
                            closeTab(tab);
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
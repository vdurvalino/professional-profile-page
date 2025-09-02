import {ChevronDown, ChevronRight} from "lucide-react";
import {useStack} from "@/context/useStack";

export function Outline() {
    const {openFolders, toggleFolder} = useStack();
    const items = ["frontend", "backend", "database", "devops", "tools"];

    return (
        <div className="mt-24 border-t border-gray-700 pt-4 mb-8">
            <div className="px-2 text-[11px] font-medium text-gray-400 tracking-wider mb-2">
                <button
                    className="cursor-pointer w-full flex items-center gap-1 px-2 py-1 hover:bg-neutral-800 uppercase rounded"
                    onClick={() => toggleFolder("outline")}
                >
                    {openFolders.outline ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
                    Outline
                </button>
            </div>
            {openFolders.outline && (
                <div className="px-4 text-sm text-gray-400">
                    <div className="py-1 hover:bg-neutral-800 px-2 rounded cursor-pointer">techStack</div>
                    <div className="ml-4">
                        {items.map(( item ) => (
                            <div key={item} className="py-1 hover:bg-neutral-800 px-2 rounded cursor-pointer">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

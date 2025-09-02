import {useStack} from "@/context/useStack";

export function TitleBar() {
    const {activeFile} = useStack()

    return (
        <div className="bg-neutral-700 h-8 flex items-center px-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#ff5f57] rounded-full hover:opacity-80 cursor-pointer"></div>
                <div className="w-3 h-3 bg-[#ffbd2e] rounded-full hover:opacity-80 cursor-pointer"></div>
                <div className="w-3 h-3 bg-[#28ca42] rounded-full hover:opacity-80 cursor-pointer"></div>
            </div>
            <div className="flex-1 text-center text-sm text-gray-400">
                {activeFile && `${activeFile} — `}
                My Tech Stack<span className={"hidden md:inline"}> — Visual Studio Code</span>
            </div>
        </div>
    )
}
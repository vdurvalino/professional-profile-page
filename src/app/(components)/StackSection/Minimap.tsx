import {useStack} from "@/context/useStack";
import {fileContent} from "@/utils/highlight";

export function Minimap() {
    const {activeFile} = useStack();

    if (!activeFile) return <></>;

    const lines = fileContent[activeFile as keyof typeof fileContent]?.split("\n") || [];

    return (
        <div
            className="hidden md:block w-24 sticky top-10 right-0 bg-[#1e1e1e] p-2 border-l border-gray-800"
        >
            <div className="text-[2px] right-0 leading-[3px] opacity-50">
                {lines.map(( line, index ) => (
                    <div key={index} className="h-[4px] bg-gray-600 mb-[1px]"
                         style={{width: `${Math.min(line.length, 100)}%`}}></div>
                ))}
            </div>
        </div>
    );
}
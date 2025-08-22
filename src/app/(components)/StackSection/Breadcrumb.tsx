import {useStack} from "@/context/useStack";

export function Breadcrumb() {
    const {activeFile} = useStack();

    if (!activeFile) return <></>;

    return (
        <div className="bg-[#1e1e1e] px-6 py-2 text-xs text-gray-500 flex items-center gap-2">
            <span>{activeFile.endsWith(".md") ? "docs" : "src"} / {activeFile}</span>
        </div>
    );
}

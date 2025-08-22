import {ChevronDown, ChevronRight, FileText, Folder, FolderOpen} from "lucide-react";
import {useStack} from "@/context/useStack";
import {Outline} from "@/app/(components)/StackSection/Outline";

export function Sidebar() {
    const {openFolders, toggleFolder, activeFile, openFile} = useStack();

    return (
        <div className="w-40 md:w-64 bg-[#252526] border-r border-gray-800 px-2">
            <div
                className="px-2 py-2 text-[11px] font-medium text-gray-400 uppercase tracking-wider flex items-center justify-between">
                <span>Explorer</span>
            </div>

            {/* Project Folder */}

            <div className="text-[11px] font-medium text-gray-400 tracking-wider">
                <button
                    className="cursor-pointer w-full flex items-center gap-1 px-2 py-1 hover:bg-[#2a2d2e] uppercase rounded"
                    onClick={() => toggleFolder("project")}
                >
                    {openFolders.project ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
                    Project
                </button>
            </div>

            {openFolders.project && (
                <>
                    {/* src folder */}
                    <div className="py-1">
                        <button
                            className="flex w-full items-center gap-1 hover:bg-[#2a2d2e] px-4 py-1 cursor-pointer rounded"
                            onClick={() => toggleFolder('src')}
                        >
                            {openFolders.src ? <ChevronDown className={'text-gray-400'} size={16}/> :
                                <ChevronRight className={'text-gray-400'} size={16}/>}
                            {openFolders.src ? <FolderOpen size={16} className="text-[#dcb67a]"/> :
                                <Folder size={16} className="text-[#dcb67a]"/>}
                            <span className="text-sm text-gray-300">src</span>
                        </button>
                        {openFolders.src && (
                            <div className="ml-6">
                                <button
                                    className={`cursor-pointer w-full flex items-center gap-2 hover:bg-[#2a2d2e] px-2 py-1 cursor-pointer rounded ${activeFile === 'stack.tsx' ? 'bg-[#37373d]' : ''}`}
                                    onClick={() => openFile('stack.tsx')}
                                >
                                    <FileText size={16} className="text-[#519aba]"/>
                                    <span className="text-sm text-gray-300">stack.tsx</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* docs folder */}
                    <div className="py-1">
                        <button
                            className="cursor-pointer w-full flex items-center gap-1 hover:bg-[#2a2d2e] px-4 py-1 cursor-pointer rounded"
                            onClick={() => toggleFolder('docs')}
                        >
                            {openFolders.docs ? <ChevronDown className={'text-gray-400'} size={16}/> :
                                <ChevronRight className={'text-gray-400'} size={16}/>}
                            {openFolders.docs ? <FolderOpen size={16} className="text-[#dcb67a]"/> :
                                <Folder size={16} className="text-[#dcb67a]"/>}
                            <span className="text-sm text-gray-300">docs</span>
                        </button>
                        {openFolders.docs && (
                            <div className="ml-6">
                                <button
                                    className={`cursor-pointer w-full flex items-center gap-2 hover:bg-[#2a2d2e] px-2 py-1 cursor-pointer rounded ${activeFile === 'learning.md' ? 'bg-[#37373d]' : ''}`}
                                    onClick={() => openFile('learning.md')}
                                >
                                    <FileText size={16} className="text-[#519aba]"/>
                                    <span className="text-sm text-gray-300">learning.md</span>
                                </button>
                                <button
                                    className={`cursor-pointer w-full flex items-center gap-2 hover:bg-[#2a2d2e] px-2 py-1 cursor-pointer rounded ${activeFile === 'README.md' ? 'bg-[#37373d]' : ''}`}
                                    onClick={() => openFile('README.md')}
                                >
                                    <FileText size={16} className="text-[#519aba]"/>
                                    <span className="text-sm text-gray-300">README.md</span>
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}

            <Outline/>
        </div>
    );
}

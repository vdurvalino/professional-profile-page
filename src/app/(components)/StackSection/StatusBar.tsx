import {GitBranch, Terminal as TerminalIcon} from "lucide-react";
import {useStack} from "@/context/useStack";

export function StatusBar() {
    const {activeFile, currentLine, showTerminal, setShowTerminal} = useStack();

    return (
        <div className="bg-[#007acc] dark:bg-[#17496b] h-6 flex items-center justify-between px-4 text-xs text-white">
            <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <GitBranch size={12}/>
                            main
                        </span>
                <span className={"hidden md:block"}>✓ 0 problems</span>
            </div>
            <div className="flex items-center gap-4">
                        <span className="cursor-pointer hover:bg-sky-500 px-2 rounded"
                              onClick={() => setShowTerminal(!showTerminal)}>
                            <TerminalIcon size={12} className="inline mr-1"/>
                            Terminal
                        </span>
                {activeFile && (
                    <>
                        <span>Ln {currentLine}, Col 1</span>
                        <span className={"hidden md:block"}>Spaces: 2</span>
                        <span className={"hidden md:block"}>UTF-8</span>
                        <span>{activeFile?.endsWith('.tsx') ? 'TypeScript React' : 'Markdown'}</span>
                    </>
                )}
            </div>
        </div>
    );
}

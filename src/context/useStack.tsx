"use client"

import {createContext, ReactNode, useContext, useState} from "react";

export type Files = "stack.tsx" | "learning.md" | "README.md";
export type Folders = "project" | "src" | "docs" | "outline";

interface StackContextProps {
    activeFile: Files | null;
    setActiveFile: ( file: Files | null ) => void;
    openTabs: Files[];
    openFile: ( file: Files ) => void;
    closeTab: ( file: Files ) => void;

    openFolders: Record<Folders, boolean>;
    toggleFolder: ( folder: Folders ) => void;

    currentLine: number;
    setCurrentLine: ( line: number ) => void;

    showTerminal: boolean;
    setShowTerminal: ( show: boolean ) => void;
    terminalOutput: ReactNode;
    setTerminalOutput: ( out: ReactNode ) => void;
}

const StackContext = createContext<StackContextProps | null>(null);

export function StackProvider( {children}: { children: ReactNode } ) {
    const [activeFile, setActiveFile] = useState<Files | null>("README.md");
    const [openTabs, setOpenTabs] = useState<Files[]>(["README.md"]);
    const [openFolders, setOpenFolders] = useState({
        project: true,
        outline: true,
        src: true,
        docs: true,
    });
    const [currentLine, setCurrentLine] = useState(1);
    const [showTerminal, setShowTerminal] = useState(false);
    const [terminalOutput, setTerminalOutput] = useState<ReactNode>("");

    function openFile( file: Files ) {
        setActiveFile(file);
        if (!openTabs.includes(file)) setOpenTabs([...openTabs, file]);
    }

    function closeTab( file: Files ) {
        const newTabs = openTabs.filter(( t ) => t !== file);
        setOpenTabs(newTabs);
        if (activeFile === file) setActiveFile(newTabs[newTabs.length - 1] || null);

        if (newTabs.length === 0) {
            setActiveFile(null)
        }
    }

    function toggleFolder( folder: Folders ) {
        setOpenFolders(( prev ) => ({...prev, [folder]: !prev[folder]}));
    }

    return (
        <StackContext.Provider
            value={{
                activeFile,
                setActiveFile,
                openTabs,
                openFile,
                closeTab,
                openFolders,
                toggleFolder,
                currentLine,
                setCurrentLine,
                showTerminal,
                setShowTerminal,
                terminalOutput,
                setTerminalOutput,
            }}
        >
            {children}
        </StackContext.Provider>
    );
}

export function useStack() {
    const ctx = useContext(StackContext);
    if (!ctx) throw new Error("useStack must be used within StackProvider");
    return ctx;
}

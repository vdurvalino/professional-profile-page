import {useStack} from "@/context/useStack";
import {fileContent, highlightSyntax} from "@/utils/highlight";
import {Minimap} from "@/app/(components)/StackSection/Minimap";

export function CodeEditor() {
    const {activeFile, currentLine, setCurrentLine} = useStack();

    if (!activeFile) return (
        <div className={"flex flex-col gap-6 items-center justify-center w-full h-[550px]"}>
            <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className={"fill-black/25 mx-auto w-65 h-65"}
            >
                <path
                    d="M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z"/>
            </svg>
            <p className={"text-gray-500"}>Open a file</p>
        </div>
    );

    const lines = fileContent[activeFile as keyof typeof fileContent]?.split("\n") || [];

    return (<div
        className="flex-1 overflow-y-scroll  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        <div className="flex">
            {!activeFile && (<div className={"flex flex-col gap-6 items-center justify-center w-full h-[550px]"}>
                <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className={"fill-black/25 mx-auto w-65 h-65"}
                >
                    <path
                        d="M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z"/>
                </svg>
                <p className={"text-gray-500"}>Open a file</p>
            </div>)}
            {/* Line Numbers */}
            <div className="bg-neutral-900 text-gray-600 text-sm font-mono px-4 py-6 select-none">
                {lines.map(( _, index ) => (<div key={index} className="h-6 text-right">
                    {index + 1}
                </div>))}
            </div>

            {/* Code Content */}
            <div className="flex-1 p-6 pt-6 pb-12">
                                    <pre className="text-sm">
                                        <code className="text-gray-300 font-mono">
                        {lines.map(( line, index ) => (<div
                            key={index}
                            className={`h-6 hover:bg-neutral-800 ${currentLine === index + 1 ? 'bg-neutral-800' : ''}`}
                            onClick={() => setCurrentLine(index + 1)}
                        >
                            {activeFile && (<span dangerouslySetInnerHTML={{
                                __html: highlightSyntax(line, activeFile)
                            }}/>)}
                        </div>))}
                        </code>
                </pre>
            </div>


            <Minimap/>
        </div>
    </div>);
}
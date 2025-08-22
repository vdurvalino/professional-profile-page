import {X} from "lucide-react";
import {useStack} from "@/context/useStack";
import {typewriterEffect} from "@/utils/typewriter";
import {useEffect} from "react";


const outputs = [
    {
        text: (
            <>
                <br/>
                <span className="text-gray-500">&gt; my-stack@0.1.0 dev</span>
                <br/>
                <span className="text-gray-500">&gt; next dev</span>
            </>
        ),
        delay: 500
    },
    {
        text: (
            <>
                <br/>
                <br/>
                <span className="text-green-500">✓</span>
                <span className="text-white"> Ready in </span>
                <span className="text-yellow-400">2.3s</span>
            </>
        ),
        delay: 800
    },
    {
        text: (
            <>
                <br/>
                <span className="text-blue-400">○</span>
                <span className="text-white"> Local: </span>
                <span className="text-cyan-400 underline">http://localhost:3000</span>
            </>
        ),
        delay: 300
    },
    {
        text: (
            <>
                <br/>
                <br/>
                <span className="text-green-400">$</span>
                <span className="animate-pulse text-white"> ▋</span>
            </>
        ),
        delay: 500
    }
];

export function Terminal() {
    const {terminalOutput, setTerminalOutput, setShowTerminal} = useStack();

    useEffect(() => {
        if (terminalOutput !== "") return;

        const runTerminal = async () => {
            await typewriterEffect("npm run dev", ( text ) => {
                setTerminalOutput(
                    <span>
            <span className="text-green-400">$</span>
            <span className="text-white"> {text}</span>
            <span className="animate-pulse">▋</span>
          </span>
                );
            }, 80);


            // Pausa antes de executar
            await new Promise(resolve => setTimeout(resolve, 300));
            let fullOutput = (
                <span>
                    <span className="text-green-400">$</span>
                    <span className="text-white"> npm run dev</span>
                </span>
            );

            for (const {text, delay} of outputs) {
                await new Promise(resolve => setTimeout(resolve, delay));
                fullOutput = (
                    <>
                        {fullOutput}
                        {text}
                    </>
                );
                setTerminalOutput(fullOutput);
            }
        };

        runTerminal();
    }, []);

    return (
        <div className="border-t border-gray-800">
            <div className="bg-neutral-900 px-4 py-2 flex items-center justify-between">
                <span className="text-gray-400">Terminal</span>
                <X size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                   onClick={() => setShowTerminal(false)}/>
            </div>
            <div className="bg-black/30 p-4 h-48 overflow-auto font-mono text-sm">
                {terminalOutput}
            </div>
        </div>
    );
}

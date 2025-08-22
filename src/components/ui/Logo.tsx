import Link from "next/link";

export function Logo() {
    return (
        <Link href="/">
            <div className="text-md font-mono font-semibold text-gray-600 dark:text-gray-400">
                &lt;<span className="ml-0.5">
                    Vinícius
                    <span className={"text-primary"}>Durvalino</span>
                </span> /&gt;
            </div>
        </Link>
    )
}

"use client"

import {StackProvider} from "@/context/useStack";
import {VsCodeWindow} from "./VsCodeWindow";
import React from "react";

export function StackSection() {
    return (
        <section className="max-w-7xl mx-auto mb-40">
            <div className="mb-12 text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Stack Tecnológica
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                    Ferramentas e tecnologias que utilizo para construir soluções escaláveis
                </p>
            </div>

            <StackProvider>
                <VsCodeWindow/>
            </StackProvider>
        </section>
    );
}

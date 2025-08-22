"use client"

import {StackProvider} from "@/context/useStack";
import {VsCodeWindow} from "./VsCodeWindow";
import React from "react";

export function StackSection() {
    return (
        <section className="page">
            <div className="mb-12 text-center mb-10">
                <h2 className="section mb-2">
                    Stack Tecnológica
                </h2>
                <p className="section-description">
                    Ferramentas e tecnologias que utilizo para construir soluções escaláveis
                </p>
            </div>

            <StackProvider>
                <VsCodeWindow/>
            </StackProvider>
        </section>
    );
}

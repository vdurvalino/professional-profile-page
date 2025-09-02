"use client"

import {StackProvider} from "@/context/useStack";
import {VsCodeWindow} from "./VsCodeWindow";
import React from "react";

export function TerminalWrapper() {
    return (
        <StackProvider>
            <VsCodeWindow/>
        </StackProvider>
    );
}

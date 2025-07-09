import {create} from 'zustand';

import {pt} from '@/locales/pt';
import {en} from '@/locales/en'; // Import en as well for language switching

export type LocaleSchema = {
    greeting: string;
    status: string;
    intro: string;
    building: string;
    features: string[];
    workingOn: string;
    tech: string[];
    contact: string;
    email: string;
    subscribe: string;
    emailPlaceholder: string;
    notify: string;
    footer: string;
    launched: string;
    emailRequired: string;
    emailInvalid: string;
    emailSentSuccess: string;
    emailSentErrorGeneric: string;
    emailSentErrorConnection: string;
    sending: string;
};

const translations = {pt, en};

interface AppState {
    isDarkMode: boolean;
    language: "en" | "pt";
    t: LocaleSchema;

    toggleDarkMode: () => void;
    setLanguage: ( lang: "en" | "pt" ) => void;
    initializeTheme: () => void;
}

// Criação do store usando zustand
export const useAppStore = create<AppState>(( set ) => ({
    isDarkMode: false,
    language: 'pt',
    t: pt,

    toggleDarkMode: () => {
        set(( state ) => {
            const newDarkMode = !state.isDarkMode;
            // Side effect: update localStorage and document class
            localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
            if (newDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return {isDarkMode: newDarkMode};
        });
    },

    setLanguage: ( lang ) => {
        set({
            language: lang,
            t: translations[lang] as LocaleSchema // Ensure type correctness
        });
    },

    initializeTheme: () => {
        // This logic runs once when called, typically on component mount
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialDarkMode = savedTheme ? savedTheme === 'dark' : prefersDark;

        // Apply theme class to document element immediately
        if (initialDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        set({isDarkMode: initialDarkMode});
    }
}));
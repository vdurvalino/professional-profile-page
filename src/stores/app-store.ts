import {create} from 'zustand';

interface AppState {
    isDarkMode: boolean;

    toggleDarkMode: () => void;
    initializeTheme: () => void;
}

// Criação do store usando zustand
export const useAppStore = create<AppState>(( set ) => ({
    isDarkMode: false,

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
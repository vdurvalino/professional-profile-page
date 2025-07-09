'use client'

import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {useAppStore} from "@/stores/app-store";
import {LoaderCircle} from "lucide-react";
import {AnimatePresence, motion} from 'framer-motion';


const formSchema = z.object({
    email: z.string()
        .min(1, {message: "emailRequired"})
        .email({message: "emailInvalid"}),
});

interface FormData {
    email: string;
}

export const NotificationForm: React.FC = () => {
    const {t} = useAppStore();


    const [apiMessage, setApiMessage] = useState<string | null>(null);
    const [apiMessageType, setApiMessageType] = useState<'success' | 'error' | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting}
    } = useForm<FormData>({

        resolver: zodResolver(formSchema),

        defaultValues: {
            email: ""
        }
    });

    const onSubmit = async ( data: FormData ) => {
        setApiMessage(null);
        setApiMessageType(null);

        try {
            const response = await fetch(
                "/api/send-notification",
                {
                    method: "POST",
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                setApiMessage(t.emailSentSuccess);
                setApiMessageType('success');
                reset();
            } else {

                const errorData = await response.json().catch(() => ({message: null}));
                const errorMessage = errorData.message || t.emailSentErrorGeneric;
                setApiMessage(errorMessage);
                setApiMessageType('error');
            }
        } catch (error) {
            console.log(error);
            setApiMessage(t.emailSentErrorConnection);
            setApiMessageType('error');
        } finally {

            setTimeout(() => {
                setApiMessage(null);
                setApiMessageType(null);
            }, 9000);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
                <input
                    type="email"
                    {...register("email")}
                    placeholder={t.emailPlaceholder}
                    className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400
                               ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                    aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                    // Display client-side validation errors
                    <p className="text-red-500 dark:text-red-400 text-sm mt-1">
                        {t[errors.email.message as keyof typeof t]} {/* Access message from translations */}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting} // Disable button while submitting
                    className={`cursor-pointer w-full px-4 py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-2
                               ${isSubmitting
                        ? 'bg-gray-600 dark:bg-gray-500 text-gray-300 dark:text-gray-400 cursor-not-allowed'
                        : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'}`}
                >
                    {isSubmitting && (
                        <LoaderCircle className="w-5 h-5 animate-spin"/>
                    )}
                    {isSubmitting ? t.sending : t.notify}
                </button>
                <AnimatePresence>
                    {apiMessage && (
                        <motion.div
                            key={apiMessage}
                            initial={{opacity: 0, y: -10}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -10}}
                            transition={{duration: 0.3}}

                            className={`mt-4 p-3 rounded-lg text-sm
                                     ${apiMessageType === 'success'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'}`}
                        >
                            {apiMessage}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </form>
    );
};
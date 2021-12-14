import { SuccessIcon, InfoIcon, WarnIcon, ErrorIcon, MiscIcon } from './icons';

export const appearances = {
    success: {
        icon: SuccessIcon,
        iconColor: 'text-green-500',
    },
    error: {
        icon: ErrorIcon,
        iconColor: 'text-red-500',
    },
    danger: {
        icon: ErrorIcon,
        iconColor: 'text-white dark:text-gray-900',
        background: 'bg-red-500',
        border: 'border-red-500',
        title: 'text-white dark:text-gray-900',
        content: 'text-gray-200 dark:text-gray-800'
    },
    warning: {
        icon: WarnIcon,
        iconColor: 'text-orange-500',
    },
    info: {
        icon: InfoIcon,
        iconColor: 'text-blue-500',
    },
    misc: {
        icon: MiscIcon,
        iconColor: 'text-gray-500 dark:text-white'
    },
};
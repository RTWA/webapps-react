import React, {
    useEffect,
    useRef,
    useState
} from 'react';

import { CloseIcon } from './icons';
import { NOOP } from './utils';
import { appearances } from './appearances';

export const gutter = 8;


// NOTE: invoke animation when NOT `autoDismiss` with opacity of 0 to avoid a
// paint bug in FireFox.
// https://bugzilla.mozilla.org/show_bug.cgi?id=625289
const Countdown = ({ autoDismissTimeout, opacity, isRunning, ...props }) => (
    <div
        className="toast-countdown"
        style={{
            // animation: `${shrinkKeyframes} ${autoDismissTimeout}ms linear`,
            animationPlayState: isRunning ? 'running' : 'paused',
            backgroundColor: 'rgba(0,0,0,0.1)',
            bottom: 0,
            height: 0,
            left: 0,
            opacity,
            position: 'absolute',
            width: '100%',
        }}
        {...props}
    />
);


function getTranslate(placement) {
    const pos = placement.split('-');
    const relevantPlacement = pos[1] === 'center' ? pos[0] : pos[1];
    const translateMap = {
        right: 'translate3d(120%, 0, 0)',
        left: 'translate3d(-120%, 0, 0)',
        bottom: 'translate3d(0, 120%, 0)',
        top: 'translate3d(0, -120%, 0)',
    };

    return translateMap[relevantPlacement];
}
const toastStates = (placement) => ({
    entering: { transform: getTranslate(placement) },
    entered: { transform: 'translate3d(0,0,0)' },
    exiting: { transform: 'scale(0.66)', opacity: 0 },
    exited: { transform: 'scale(0.66)', opacity: 0 },
});

const ToastElement = ({ appearance, placement, transitionDuration, transitionState, ...props }) => {
    const [height, setHeight] = useState('auto');
    const elementRef = useRef(null);

    useEffect(
        () => {
            if (transitionState === 'entered') {
                const el = elementRef.current;
                setHeight(el.offsetHeight + gutter);
            }
            if (transitionState === 'exiting') {
                setHeight(0);
            }
        },
        [transitionState]
    );

    return (
        <div
            ref={elementRef}
            style={{
                height,
                transition: `height ${transitionDuration - 100}ms 100ms`,
            }}
        >
            <div
                className={`${(appearances[appearance]?.background) ? appearances[appearance].background : 'bg-white dark:bg-gray-600'}
                    ${(appearances[appearance]?.border) ? appearances[appearance].border : 'border-gray-200 dark:border-gray-600'}
                    border overflow-hidden shadow-lg rounded-lg mx-auto mb-2 flex flex-row w-96`}
                style={{
                    transition: `transform ${transitionDuration}ms cubic-bezier(0.2, 0, 0, 1), opacity ${transitionDuration}ms`,
                    ...toastStates(placement)[transitionState],
                }}
                {...props}
            />
        </div>
    );
};


export const DefaultToast = ({
    appearance = 'misc',
    autoDismiss,
    autoDismissTimeout,
    title,
    content,
    isRunning,
    onDismiss,
    placement,
    transitionDuration,
    transitionState,
    onMouseEnter,
    onMouseLeave,
    action,
    actionLabel,
    secondaryAction,
    secondaryActionLabel,
    theme,
    color,
    ...otherProps
}) => {
    const style = appearances[appearance];

    return (
        <ToastElement
            appearance={appearance}
            placement={placement}
            transitionState={transitionState}
            transitionDuration={transitionDuration}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            {...otherProps}
        >
            {
                (appearance !== 'plain')
                    ? (
                        <div className={`flex ${(content !== '') ? 'pt-2' : 'pt-4'} pl-3 ${style.iconColor}`}>
                            <Countdown
                                opacity={autoDismiss ? 1 : 0}
                                autoDismissTimeout={autoDismissTimeout}
                                isRunning={isRunning}
                            />
                            <style.icon />
                        </div>
                    ) : null
            }
            <div className={`flex-grow ${(content !== '') ? 'p-2' : 'p-4 pl-2'} ${(appearance === 'plain') ? 'pl-4' : ''}`}>
                <div className={`font-medium ${(style?.title) ? style.title : 'dark:text-white'}`}>
                    {title}
                </div>
                {
                    (content !== '')
                        ? (
                            <div className={`text-sm tracking-tight ${(style?.content) ? style.content : 'text-gray-600 dark:text-gray-300'}`}>
                                {content}
                            </div>
                        ) : null
                }
                {
                    (action && secondaryAction)
                        ? (
                            <div className="flex flex-row gap-x-6 pt-2">
                                <button role="button" className={`text-${(color) ? color : theme}-600 dark:text-${(color) ? color : theme}-500 hover:text-${(color) ? color : theme}-500 dark:hover:text-${(color) ? color : theme}-600 font-bold`} onClick={action}>
                                    {actionLabel}
                                </button>
                                <button role="button" className="text-gray-500 dark:text-white hover:font-medium" onClick={(secondaryAction === 'dismiss') ? onDismiss : secondaryAction}>
                                    {secondaryActionLabel}
                                </button>
                            </div>
                        ) : null
                }
            </div>
            {
                (action && !secondaryAction)
                    ? (
                        <div className={`flex items-center text-${(color) ? color : theme}-600 dark:text-${(color) ? color : theme}-500 hover:text-${(color) ? color : theme}-500 dark:hover:text-${(color) ? color : theme}-600 px-4`}>
                            <button role="button" className="font-bold" onClick={action}>{actionLabel}</button>
                        </div>
                    ) : null
            }
            {
                (onDismiss && secondaryAction !== 'dismiss')
                    ? (
                        <div
                            role="button"
                            className={`text-gray-800 dark:text-gray-200 cursor-pointer flex-shrink-0 pr-3 opacity-50 hover:opacity-100 transition-opacity ${(content !== '') ? 'pt-2' : 'pt-4'}`}
                            onClick={onDismiss}
                        >
                            <CloseIcon />
                            <span className="sr-only">
                                Close
                            </span>
                        </div>
                    ) : null
            }
        </ToastElement >
    )
};

DefaultToast.defaultProps = {
    onDismiss: NOOP,
};
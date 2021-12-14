import React, { Component, useContext } from 'react';
import { createPortal } from 'react-dom';
import { Transition, TransitionGroup } from 'react-transition-group';

import { ToastController } from './ToastController';
import { ToastContainer } from './ToastContainer';
import { DefaultToast } from './ToastElement';
const defaultComponents = { Toast: DefaultToast, ToastContainer };

import { generateUEID, NOOP } from './utils';

const ToastContext = React.createContext();
const { Consumer, Provider } = ToastContext;

const canUseDOM = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

// Provider
// ===========================
export class ToastProvider extends Component {
    static defaultProps = {
        autoDismiss: false,
        autoDismissTimeout: 5000,
        components: defaultComponents,
        newestOnTop: false,
        placement: 'top-right',
        transitionDuration: 220,
    };

    state = { toasts: [] };

    // Internal Helpers
    // =================
    has = (id) => {
        if (!this.state.toasts.length) {
            return false;
        }

        return Boolean(this.state.toasts.filter(t => t.id === id).length);
    };

    onDismiss = (id, cb = NOOP) => () => {
        cb(id);
        this.remove(id);
    };

    // Public API
    // ================
    add = (title, content, options = {}, cb = NOOP) => {
        const id = options.id ? options.id : generateUEID();
        const callback = () => cb(id);

        // Bail if a toast exists with this ID
        if (this.has(id)) {
            return;
        }

        // Update the toast stack
        this.setState(state => {
            const newToast = { title, content, id, ...options };
            const toasts = this.props.newestOnTop ? [newToast, ...state.toasts] : [...state.toasts, newToast];

            return { toasts };
        }, callback);

        // Consumer may want to do something with the generated ID (and not use the callback)
        return id;
    };

    remove = (id, cb = NOOP) => {
        const callback = () => cb(id);

        // Bail if NO toasts exits with this ID
        if (!this.has(id)) {
            return;
        }

        this.setState(state => {
            const toasts = state.toasts.filter(t => t.id !== id);
            return { toasts };
        }, callback);
    };

    removeAll = () => {
        if (!this.state.toasts.length) {
            return;
        }

        this.state.toasts.forEach(t => this.remove(t.id));
    };

    update = (id, options = {}, cb = NOOP) => {
        const callback = () => cb(id);

        // Bail if NO toasts exist with ID
        if (!this.has(id)) {
            return;
        }

        // Update the toast stack
        this.setState(state => {
            const old = state.toasts;
            const i = old.findIndex(t => t.id === id);
            const updateToast = { ...old[i], ...options };
            const toasts = [...old.slice(0, i), updateToast, ...old.slice(i + 1)];

            return { toasts };
        }, callback);
    };

    render() {
        const {
            autoDismiss: inheritedAutoDismiss,
            autoDismissTimeout,
            children,
            components,
            placement,
            portalTargetSelector,
            transitionDuration,
            UI,
            color,
        } = this.props;
        const { Toast, ToastContainer } = { ...defaultComponents, ...components };
        const { add, remove, removeAll, update } = this;
        const toasts = Object.freeze(this.state.toasts);

        const hasToasts = Boolean(toasts.length);
        const portalTarget = canUseDOM
            ? portalTargetSelector
                ? document.querySelector(portalTargetSelector)
                : document.body
            : null;

        return (
            <Provider value={{ add, remove, removeAll, update, toasts }}>
                {children}
                {portalTarget ? (
                    createPortal(
                        <ToastContainer placement={placement} hasToasts={hasToasts}>
                            <TransitionGroup component={null}>
                                {toasts.map(
                                    ({
                                        appearance,
                                        autoDismiss,
                                        title,
                                        content,
                                        id,
                                        onDismiss,
                                        action,
                                        actionLabel,
                                        secondaryAction,
                                        secondaryActionLabel,
                                        ...unknownConsumerProps
                                    }) => (
                                        <Transition
                                            appear
                                            key={id}
                                            mountOnEnter
                                            timeout={transitionDuration}
                                            unmountOnExit
                                        >
                                            {
                                                transitionState => (
                                                    <ToastController
                                                        appearance={appearance}
                                                        autoDismiss={
                                                            autoDismiss !== undefined
                                                                ? autoDismiss
                                                                : inheritedAutoDismiss
                                                        }
                                                        autoDismissTimeout={autoDismissTimeout}
                                                        component={Toast}
                                                        key={id}
                                                        onDismiss={this.onDismiss(id, onDismiss)}
                                                        placement={placement}
                                                        transitionDuration={transitionDuration}
                                                        transitionState={transitionState}
                                                        title={title}
                                                        content={content}
                                                        action={action}
                                                        actionLabel={actionLabel}
                                                        secondaryAction={secondaryAction}
                                                        secondaryActionLabel={secondaryActionLabel}
                                                        UI={UI}
                                                        color={color}
                                                        {...unknownConsumerProps}
                                                    />
                                                )
                                            }
                                        </Transition>
                                    )
                                )}
                            </TransitionGroup>
                        </ToastContainer>,
                        portalTarget
                    )
                ) : (
                    <ToastContainer placement={placement} hasToasts={hasToasts} />
                )}
            </Provider>
        )
    }
}

export const ToastConsumer = ({ children }) => (
    <Consumer>{context => children(context)}</Consumer>
);

export const withToastManager = (Comp) =>
    React.forwardRef((props, ref) => (
        <ToastConsumer>
            {context => <Comp toastManager={context} {...props} ref={ref} />}
        </ToastConsumer>
    ));

export const useToasts = () => {
    const ctx = useContext(ToastContext);

    if (!ctx) {
        throw Error(
            'The `useToasts` hook must be called from a descendent of the `ToastProvider`.'
        );
    }

    return {
        addToast: ctx.add,
        removeToast: ctx.remove,
        removeAllToasts: ctx.removeAll,
        updateToast: ctx.update,
        toastStack: ctx.toasts
    };
};
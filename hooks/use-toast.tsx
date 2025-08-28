'use client';

import * as React from 'react';
import type { ToastActionElement, ToastProps } from '@/components/ui/toast';

const TOAST_LIMIT = 1;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

type State = {
  toasts: ToasterToast[];
};

// Create a context to manage toast state
const ToastContext = React.createContext<{
  toasts: ToasterToast[];
  addToast: (toast: Omit<ToasterToast, 'id'>) => void;
  removeToast: (id: string) => void;
  updateToast: (id: string, toast: Partial<ToasterToast>) => void;
}>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
  updateToast: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([]);

  const addToast = React.useCallback((toast: Omit<ToasterToast, 'id'>) => {
    setToasts((currentToasts) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newToast = {
        ...toast,
        id,
        open: true,
      };
      return [newToast, ...currentToasts].slice(0, TOAST_LIMIT);
    });
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  }, []);

  const updateToast = React.useCallback(
    (id: string, toast: Partial<ToasterToast>) => {
      setToasts((currentToasts) =>
        currentToasts.map((t) =>
          t.id === id ? { ...t, ...toast } : t
        )
      );
    },
    []
  );

  const contextValue = {
    toasts,
    addToast,
    removeToast,
    updateToast
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  const toast = React.useCallback(
    (props: Omit<ToasterToast, 'id'>) => {
      context.addToast(props);
    },
    [context]
  );

  return {
    toast,
    toasts: context.toasts,
    dismiss: context.removeToast,
  };
}
"use client";

import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  note?: string;
  image: string;
  price?: number;
  category?: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  hydrated: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updateNote: (id: string, note: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotalItems: () => number;
  _hydrate: () => void;
}

const STORAGE_KEY = "saisrini-cart";

function isStorageAvailable(): boolean {
  try {
    if (typeof window === "undefined") return false;
    const ls = window.localStorage;
    if (!ls || typeof ls.getItem !== "function") return false;
    return true;
  } catch {
    return false;
  }
}

function loadFromStorage(): CartItem[] {
  try {
    if (!isStorageAvailable()) return [];
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveToStorage(items: CartItem[]) {
  try {
    if (!isStorageAvailable()) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  hydrated: false,

  _hydrate: () => {
    const items = loadFromStorage();
    set({ items, hydrated: true });
  },

  addItem: (item) => {
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      const newItems = existing
        ? state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state.items, { ...item, quantity: item.quantity || 1 }];
      saveToStorage(newItems);
      return { items: newItems, isOpen: true };
    });
  },

  removeItem: (id) => {
    set((state) => {
      const newItems = state.items.filter((i) => i.id !== id);
      saveToStorage(newItems);
      return { items: newItems };
    });
  },

  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id);
      return;
    }
    set((state) => {
      const newItems = state.items.map((i) =>
        i.id === id ? { ...i, quantity } : i
      );
      saveToStorage(newItems);
      return { items: newItems };
    });
  },

  updateNote: (id, note) => {
    set((state) => {
      const newItems = state.items.map((i) =>
        i.id === id ? { ...i, note } : i
      );
      saveToStorage(newItems);
      return { items: newItems };
    });
  },

  clearCart: () => {
    saveToStorage([]);
    set({ items: [] });
  },

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  getTotalItems: () =>
    get().items.reduce((total, item) => total + item.quantity, 0),
}));

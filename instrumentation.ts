export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // Node.js 22+ exposes localStorage as an experimental global, but without a
    // storage file configured its methods are undefined. Patch it to a safe no-op
    // so third-party SSR code doesn't throw "localStorage.getItem is not a function".
    const ls = (globalThis as Record<string, unknown>).localStorage;
    if (ls && typeof (ls as Storage).getItem !== "function") {
      const noop = () => null;
      const noopVoid = () => {};
      Object.defineProperty(globalThis, "localStorage", {
        value: {
          getItem: noop,
          setItem: noopVoid,
          removeItem: noopVoid,
          clear: noopVoid,
          key: noop,
          length: 0,
        } as Storage,
        writable: true,
        configurable: true,
      });
    }
  }
}

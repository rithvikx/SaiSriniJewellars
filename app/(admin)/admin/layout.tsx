export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0f0800", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

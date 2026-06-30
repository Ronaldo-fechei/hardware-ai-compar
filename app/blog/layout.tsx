
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto max-w-5xl px-2 py-6">{children}</div>;
}

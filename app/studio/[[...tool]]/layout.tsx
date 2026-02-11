export const metadata = {
  title: 'DJ Werra Studio',
  description: 'Content management for DJ Werra website',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}

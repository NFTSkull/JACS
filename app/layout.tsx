import './globals.css';

export const metadata = {
  title: 'JACS Plastics - Tarimas y Cajas de Plástico',
  description: 'Soluciones higiénicas, durables y listas para exportación.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
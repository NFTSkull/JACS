import { inter, rubik } from '@/lib/fonts';
import './globals.css';

export const metadata = {
  title: 'JACS Plastics - Tarimas y Cajas de Plástico de Clase Mundial',
  description: 'Soluciones higiénicas, durables y listas para exportación. Tarimas plásticas y cajas agrícolas en polipropileno reciclado.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${rubik.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

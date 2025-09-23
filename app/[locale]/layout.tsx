import { inter, rubik } from '@/lib/fonts';
import '../globals.css';

export function generateStaticParams() {
  return [
    { locale: 'es' },
    { locale: 'en' }
  ];
}

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return (
    <html lang={locale} className={`${inter.variable} ${rubik.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
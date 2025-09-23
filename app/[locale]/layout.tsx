import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import { Analytics } from '@/components/Analytics';
import { inter, rubik } from '@/lib/fonts';
import '../globals.css';

const locales = ['es', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${rubik.variable}`}>
      <head>
        <Analytics 
          gaId={process.env.NEXT_PUBLIC_GA_ID}
          metaPixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import { Directions, Languages } from '@/constants/enums';
import { Cairo } from 'next/font/google';
import { Locale } from '@/i18n.config';

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['latin'],
  preload: true,
});

export const metadata: Metadata = {
  title: ' استضافة ويندوز - الاستضافات المشتركة | Wed Hosting',
  description:
    'احصل على استضافة ويندوز موثوقة وآمنة ضمن خطط استضافة مشتركة مميزة تناسب جميع احتياجاتك. أداء قوي، دعم فني متواصل، وأسعار منافسة.',
};

export async function generateStaticParams() {
  return [{ locale: Languages.ARABIC }, { locale: Languages.ENGLISH }];
}

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const locale = (await params).locale;
  return (
    <html
      lang={locale}
      dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}
    >
      <body className={cairo.className}>{children}</body>
    </html>
  );
}

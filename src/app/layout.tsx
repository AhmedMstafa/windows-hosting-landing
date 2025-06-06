import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}

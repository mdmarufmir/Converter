import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'File Converter Pro | Convert Any File Format',
  description: 'Professional file converter supporting 100+ file formats with AI assistance',
  keywords: ['file converter', 'pdf converter', 'image converter', 'document converter', 'video converter'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-50 to-slate-100">
        <SessionProvider>
          <Navbar />
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}

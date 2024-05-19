import Providers from "@/components/providers";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { use } from 'react';
import AuthChangeListener from '@/components/auth-change-listener';
import UserSessionProvider from "@/components/user-session-provider";
import loadSession from "@/lib/load-session";

const inter = Inter({ subsets: ['latin'] })

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Pomodorus',
  description: 'Focus on your tasks with the Pomodoro Technique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = use(loadSession());

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthChangeListener session={session}>
          <UserSessionProvider session={session}>

            <Providers>{children}</Providers>
          </UserSessionProvider>
        </AuthChangeListener>
      </body>
    </html>
  )
}

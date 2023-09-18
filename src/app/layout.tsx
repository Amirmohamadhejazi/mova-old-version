// import './globals.css'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }
'use client';
import './globals.css';
// import { yekan } from '@public/utils/font/font';
// import yeka
import { yekan } from '../../public/utils/font/font';
export default function RootLayout({ children }: { children: JSX.Element }) {
    return (
        <html lang="fa" dir="rtl" className={yekan.variable}>
            <body>{children}</body>
        </html>
    );
}


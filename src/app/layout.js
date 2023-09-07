import './globals.css';
import { yekan } from '@components/common/utils/font/font';

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl" className={yekan.variable}>
            <body>{children}</body>
        </html>
    );
}

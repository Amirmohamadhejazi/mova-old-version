import './globals.css';
import { yekan } from '@components/common/utils/font/font';

export default function RootLayout({ children }) {
    return (
        <html lang="fa-IR" className={yekan.variable}>
            <body dir='rtl' className='font-normal'>{children}</body>
        </html>
    );
}

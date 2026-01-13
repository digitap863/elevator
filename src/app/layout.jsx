import { Lora, Roboto, Work_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import "./globals.css";


export const metadata = {
  title: "Reliant Elevators",
  description: "Reliant Elevators Website",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
});

const worksans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-worksans',
});

// Custom local fonts
const aquire = localFont({
  src: '../../public/fonts/Aquire-BW0ox.otf',
  variable: '--font-aquire',
  display: 'swap',
});

const dragon = localFont({
  src: '../../public/fonts/Dragon-Troopers-NE.ttf',
  variable: '--font-dragon',
  display: 'swap',
});

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} ${lora.variable} ${worksans.variable} ${aquire.variable} ${satoshi.variable} ${dragon.variable} antialiased`} suppressHydrationWarning>
          <div className="overflow-hidden">       
            {children}
          </div>
      </body>
    </html>
  );
}

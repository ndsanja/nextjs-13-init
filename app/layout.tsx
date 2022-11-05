import '../styles/globals.css';
import ToogleTheme from './components/toogle-theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html id="themeMode" className="dark">
      <head></head>
      <body className="text-black bg-white dark:bg-black dark:text-white px-[64px]">
        <nav className="flex items-center justify-between h-[50px] border-b border-b-gray-500">
          <h1 className="text-2xl font-semibold">Title</h1>
          <div>
            <ToogleTheme />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

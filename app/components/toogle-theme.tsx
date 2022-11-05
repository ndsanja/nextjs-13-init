'use client';

export default function ToogleTheme() {
  const theme = () => {
    const html = document.getElementById('themeMode');
    html?.classList.toggle('dark');
  };

  return <button onClick={theme}>Theme</button>;
}

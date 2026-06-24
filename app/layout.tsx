import React from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <title>مطبعه القائد | للدعاية والاعلان والحلول الرقميه</title>
        <meta name="description" content="الرائدة في مجال الدعاية والاعلان والحلول الرقميه" />
      </head>
      <body className="bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}


import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { CssBaseline } from '@mui/material';
import Layout from '@/components/ui/Layout';

const title = 'DDI';
const description = 'Deloitte Digital Insurance';

export const metadata: Metadata = {
  title: title,
  description: description
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <CssBaseline /> {/* Ensures consistent Material UI styling */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

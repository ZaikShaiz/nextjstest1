import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from '../context/AuthContext';
import { DataProvider } from '../context/DataContext';
import Header from './components/Header';
import { ProductProvider } from '@/context/ProductContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>


        <AuthProvider>
          <DataProvider>
            <Header />
            <ProductProvider>
              {children}
            </ProductProvider>
          </DataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

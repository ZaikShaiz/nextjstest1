import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from '../context/AuthContext';
import { DataProvider } from '../context/DataContext';
import Header from './components/Header';
import { ProductProvider } from '@/context/ProductContext';
import Banner from '@/herosectioncomp';
import CasinoMenu from './components/casinomenu';
import Teenpatti from './components/teenpatti';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>


        <AuthProvider>
          <DataProvider>
            <Header />
            <Banner />
            <Teenpatti product={undefined}/>
            <CasinoMenu />
            <ProductProvider>
              {children}
            </ProductProvider>
          </DataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

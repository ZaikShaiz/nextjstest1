import { AuthProvider } from './component/AuthContext';
import Banner from './component/banner';
import CasinoMenu from './component/casinomenu';
import Header from './component/header';
import { ProductProvider } from './component/ProductContext';
import Teenpatti from './component/teenpatti';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <Banner />
          <Teenpatti product={undefined} />
          <CasinoMenu />
          <ProductProvider>
            {children}
          </ProductProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

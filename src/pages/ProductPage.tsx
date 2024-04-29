import ProductInfo from '../components/ProductInfo';
import RouterLocation from '../components/RouterLocation';
import SelectedProducts from '../components/SelectedProducts';
import Page from './Page';
import './ProductPage.css';

export default function ProductPage(): JSX.Element {
  return (
    <>
      <Page>
        <RouterLocation hasEndPoint={true} className="router-location" />
        <ProductInfo />
        <SelectedProducts title="Related Products" />
      </Page>
    </>
  );
}

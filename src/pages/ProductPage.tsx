import ProductInfo from '../components/ProductInfo';
import RouterLocation from '../components/RouterLocation';
import Page from './Page';
import './ProductPage.css';

export default function ProductPage(): JSX.Element {
  return (
    <>
      <Page>
        <RouterLocation hasEndPoint={true}/>
        <ProductInfo />
      </Page>
    </>
  );
}

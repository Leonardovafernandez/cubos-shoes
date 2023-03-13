import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Products from '../../components/Products';
// import Modal from '../../components/Modal';
import Data from '../../data'

function Main() {
  return (
    <div className="container">
      <Header />
      <div className='my-products'>
        {Data.map((product) => (
          <Products key={product.id} src={product.image} name={product.name} oldPrice={product.oldPrice} price={product.currentPrice} description={product.description} />
        ))}
      </div>
      <Footer />
      {/* <Modal /> */}
    </div>
  );
}

export default Main;

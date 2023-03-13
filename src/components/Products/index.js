import './style.css';

function Products({ key, src, name, oldPrice, price, description }) {
  return (
    <div className="card">
      <img src={src} alt={'shoe'}></img>
      <div className='info'>
        <span className="card-name">{name}</span>
        <div className="card-text-one">
          <span className="card-old-price">{`R$ ${oldPrice.toFixed(2)}`}</span>
          <strong className="card-price">{`R$ ${price.toFixed(2)}`}</strong>
        </div>
        <div className="card-text-two">
          <strong className="min-price">{`6X R$ ${(Number(price) / 6).toFixed(2)}`}</strong>
          <span className="juros">Sem juros</span>
        </div>
      </div>
    </div>
  );
}

export default Products;

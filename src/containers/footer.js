import CartButton from '../components/cartButton'

function Footer({ show, modalDisplay }) {
    
    if (show) return (
      <footer className="footer">
          <CartButton modalDisplay={modalDisplay}/>
      </footer>
    );

    return null;
    
  }
  
  export default Footer;
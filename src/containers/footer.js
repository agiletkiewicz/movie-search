import CartButton from '../components/cartButton'

function Footer({ show }) {
    
    if (show) return (
      <footer className="footer">
          <CartButton />
      </footer>
    );

    return null;
  }
  
  export default Footer;
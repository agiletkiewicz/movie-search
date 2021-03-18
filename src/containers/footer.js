import CartButton from '../components/cartButton'

function Footer({ show, showConfirmation }) {
    
    if (show) return (
      <footer className="footer">
          <CartButton showConfirmation={showConfirmation}/>
      </footer>
    );

    return null;
  }
  
  export default Footer;
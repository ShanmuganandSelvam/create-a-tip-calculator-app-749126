import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Tip Calculator</p>
    </footer>
  );
};

export default Footer;
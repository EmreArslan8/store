import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='fixed bottom-0 w-full bg-gray py-4 z-50'>
       <div className="text-center">
          <p>&copy; {new Date().getFullYear()} E-ticaret Sitemiz. Tüm hakları saklıdır.</p>
        </div>
    </footer>
  );
};

export default Footer;

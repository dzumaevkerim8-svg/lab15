import  './Footer.css';
const Footer = () => { 
    const currentDate = new Date ();
   const formatedDate = currentDate.toLocaleDateString('ru-RU', {
year: 'numeric',
month: 'long',
day: 'numeric', 
   })

   console.log(formatedDate)
    return (
        <footer className='footer'> 
            
            <p className='footer__info'>
                Дата создания: {formatedDate}
            </p>
             <p className='footer__info'>
                Автор: Джумаев Керим
             </p>
             </footer>
       
    );
};

export default Footer;
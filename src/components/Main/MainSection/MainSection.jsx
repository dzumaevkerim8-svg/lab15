import  './MainSection.css';
import avatarImage from  '../../../assets/avatar.png';
const MainSection = () => { 
    return (
        <div className='main-section'> 
          <img 
          src={avatarImage}
           alt='Аватар'
           className='main-section__image'
           />
        </div>
    );
};

export default MainSection;
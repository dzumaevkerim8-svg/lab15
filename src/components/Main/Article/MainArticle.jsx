import { CONTENT_TYPE } from '../../../constants';
import  './MainArticle.css';
const MainArticle = ({ type }) => {
    if (type === CONTENT_TYPE.NEWS) {
        return (
            <article>
                <h1>Новости</h1>
                <p>Сегодня солнечно!</p>
            </article>
        );
    }
    if (type === CONTENT_TYPE.ABOUT) {
        return (
            <article>
                <h1>Южный федеральный университет</h1>
            </article>
        );
    }
    if (type === CONTENT_TYPE.CONTACTS) {
        return (
            <article>
                <p>Телефон: +7 (999) 999-99-99</p>
            </article>
        );
    }
    return null;
};

export default MainArticle;
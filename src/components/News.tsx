import { useState } from "react";

/** props, передаваемые в компонент News 
 * news -  массив новостей,
 * headers - массив заголовков
 * quotation - массив котировок
 * 
 * объект news имеет следующую структуру: 
 * id - универсальный идентификатор записи
 * category - вид новости - значение из массива заголовков
 * img - ссылка на картинку
 * text - текстовое описание новости
 * url - ссылка на страницу с новостью
 * 
 * объект quotation состоит из
 * title - название валюты
 * value - курс
 * difference - разница курса
*/
type NewsProps = {
    news: {id: string, category: string, img: string, text: string, url: string}[],
    headers: string[],
    quotation: {title: string, value: number, difference: number}[]
}

/**props для NewsHeader
 * headers - массив заголовков,
 * activeHeaderPosition - порядковый номер активного заголовка в массиве
 * onHeaderChanged - ф-я изменения активного заголовка
 */

type NewsHeaderProps = {
    headers: string[],
    activeHeaderPosition: number,
    onHeaderChanged: (newPosition: number) => void
}

/**props для NewsBlock
 * news - массив новостей
 */
type NewsBlockProps = {
    news: {id: string, category: string, img: string, text: string, url: string}[],  
}

/**props для Quotation
 * quotation - массив котировок
 */
type QuotationProps = {
    quotation: {title: string, value: number, difference: number}[]
}

/**компонент для показа всего новостного блока: заголовков, новостей и котировок*/
const News = (props: NewsProps) => {
    //в state активный заголовок
    const [activeBlockPosition, setActiveBlockPosition] = useState<number>(0);
    
    //ф-я изменения state, если изменился выбранный заголовок
    function onActivePositionChanged(newPosition: number) {
        setActiveBlockPosition(newPosition);
    }

    return (
    <>
    <NewsHeader  headers={props.headers} activeHeaderPosition={activeBlockPosition} onHeaderChanged={onActivePositionChanged}/>
    <NewsBlock news={props.news.filter(item => item.category == props.headers[activeBlockPosition])}/>
    <Quotation quotation={props.quotation} />
    </>
    )
}

/** компонент, отображающий заголовки, по клику на заголовок происходит изменение активного, и показываются новости из другой категории*/
const NewsHeader = (props: NewsHeaderProps) => {
    
    return (
        <div>
        {props.headers.map((header,index) => 
          <div key={index} className={index == props.activeHeaderPosition ? "active" : ""}>
              <h1 onClick={() => props.onHeaderChanged(index)}>{header}</h1>
          </div>
        )}
        </div>
    
    ) 
}

//**компонент, отображающий массив новостей
const NewsBlock = (props: NewsBlockProps) => {
    return (
        <>
        {props.news.map((item) => 
                <div className="itemBlock" key={item.id}>
                    <img src={item.img} ></img>
                    <a href={item.url}>{item.text}</a>
                </div>   
            )
        }
        </>
    )
    
}

/**компонент, отображающий котировки - 
 * его структура формируется таким же образом, как в NewsBlock, 
 * каждое поле QuotationProps обернуто в свой тэг */
const Quotation = (props: QuotationProps) => {
    return <></>
}

export default News;
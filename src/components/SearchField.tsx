import { useState } from "react";

/**props компонента SearchField
 * categories - категории поиска
 * topSearchStr - текст для строки "найдется все, даже ..."
 * topSearchUrl - ссылка для строки "найдется все, даже ..."
 * logoImgSrc - ссылка на логотип */
type SearchFieldProps = {
    categories: string[],
    topSearchStr: string,
    topSearchUrl: string,
    logoImgSrc: string
}
/**props компонента SearchFieldHeaders
 * categories - категории поиска
 * activeCategoryPosition - порядковый номер выбранной категории */
type SearchFieldHeaderProps = {
    categories: string[],
    activeCategoryPosition ?: number
}

//компонент для поиска
const SearchField = (props: SearchFieldProps) => {
    const [activeHeaderPosition, setActiveHeaderPosition] = useState<number|undefined>();

    //в submit происходит поиск с учетом заданной категории, при вызове вместо category нужно передать activeHeader
    function onSubmit(category?:string) {

    }

    /** структура блоков -
     * логотип
     * заголовки категорий поиска с возможностью переключения
     * форма поиска
     * строка со ссылкой "найдется все, даже ..." */

    return(
        <>
        <img src={props.logoImgSrc}/>
        <SearchFieldHeader categories={props.categories} activeCategoryPosition={activeHeaderPosition}/>
        <form onSubmit={() => onSubmit()}>
        <label htmlFor="search"></label>
        <input type="text" id="search" name="search"/>
        
        <button type="submit">Найти</button>
        </form>
        <h6>Найдется все, даже <a href={props.topSearchUrl}>{props.topSearchStr}</a></h6>
        </>
    )

}

/** компонент, отображающий заголовки (Видео, Картинки и т.д.), 
 * по клику на заголовок происходит изменение активного заголовка в state*/
const SearchFieldHeader = (props: SearchFieldHeaderProps) => {
    return <></>
}

export default SearchField;
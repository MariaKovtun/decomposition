import './App.css'
import Link from './components/Link'
import News from './components/News'
import SearchField from './components/SearchField'

function App() {
  return (
    <>
    <News news={[
      {id: "1", category: "Политика", img: "https://dummyimage.com/15x15/000/fff", text: "Путин поймал огромную щуку", url: "https://ria.ru/20130726/952320636.html"},
      {id: "2", category: "Фильмы", img: "https://dummyimage.com/15x15/000/fff", text: "Ученые изобрели машину времени, чтобы вернуть 2008", url: "https://www.kinopoisk.ru/film/476/?utm_referrer=www.google.com"},
      {id: "3", category: "Еда", img: "https://dummyimage.com/15x15/000/fff", text: "Что съесть, чтобы похудеть", url: "https://vfokuse.mail.ru/article/rossiyanam-rasskazali-kak-pravilno-pit-kofe-chtoby-pohudet-59823133/"}
      ]} headers={["Политика", "Фильмы", "Еда"]} quotation={[]}/>

      <SearchField 
      categories={["Видео","Картинки","Новости"]} 
      topSearchStr="как сделать дз от нетологии" 
      topSearchUrl="https://track24.ru/google/" 
      logoImgSrc="https://dummyimage.com/20x20/000/fff"/>

    <Link title="Погода">
    <>
    <img src="https://dummyimage.com/10x10/000/fff" alt="дождь"></img>
    <p>Утром +17, днем +20</p>
    </>
    </Link>

    <Link title=" Посещаемое">
      <ul>
        <li>Недвижимость - о сталинках</li>
        <li>Маркет - люстры и светильники</li>
        <li>Авто.ру - что-то на автомобильном</li>
      </ul>
    </Link>     

    </> 
  )
  //аналогично добавить компонент Link для блока 
}


export default App

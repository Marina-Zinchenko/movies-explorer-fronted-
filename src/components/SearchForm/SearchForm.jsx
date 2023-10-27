import "./SearchForm.css";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
      <section className="search">
        <form className="search__form"  name="search-movie">
          <div className="search__border-input">
          <input className="search__input" type="text" placeholder="Фильм" required/>
          <button className="search__button" type="submit">Поиск</button>   
          </div>          
        </form>
        <>
        <FilterCheckbox/>
        <label>Короткометражки</label>
        </>
          <div className='search__line' />   
      </section>

  )
}
export default SearchForm;
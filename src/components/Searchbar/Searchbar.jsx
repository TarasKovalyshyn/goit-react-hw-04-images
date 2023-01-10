import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNameChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (query === '') {
      return toast.error('Рядок пошуку пустий !');
    }

    onSubmit(query);
    setSearchQuery('');
  };

  return (
    <header className={css.Searchbar}>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleNameChange}
        />
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
}

export default Searchbar;

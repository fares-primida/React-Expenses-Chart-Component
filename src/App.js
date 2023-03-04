import React from 'react'
import Home from './Contents/Home'
import Book from './Contents/Book'
import { Routes , Route , Link} from 'react-router-dom';
import BookList from './Contents/BookList';
import NewBook from './Contents/NewBook';
import NotFound from './Contents/NotFound';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Book'>Books</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Book' element={<BookList />}/>
      <Route path='/Book/:id' element={<Book />}/>
      <Route path='/Book/new' element={<NewBook />}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;

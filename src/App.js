import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Header from './components/Header';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
          <Header />
          <BookForm />
          <BookList />
      </BookContextProvider>  
    </div>
  );
}

export default App;

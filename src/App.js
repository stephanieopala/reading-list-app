import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Header from './components/Header';
import BookContextProvider from './context/BookContext';
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <ThemeContextProvider>
          <Header />
          <BookList />
          <BookForm />
        </ThemeContextProvider>
      </BookContextProvider>  
    </div>
  );
}

export default App;

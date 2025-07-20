import './App.css'
import HeaderComponent from './components/HeaderComponent'
import SelectCityComponent from './components/SelectCityComponent'
import InfoComponent from './components/InfoComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  

  return (
    <>
      <header>
        <HeaderComponent/>
      </header>
      <main>
        <SelectCityComponent/>
        <InfoComponent/>
      </main>
      <footer>
        <FooterComponent/>
      </footer>
    </>
   )
}

export default App

import './scss/home.scss'
import Header from './components/Header'
import Articles from './components/Articles'

function App() {
  return (
    <>
      <main className='main-comp'>
        <img src="./img/oldbg.jpg" alt="" />
        <div className="scroll-comp overflow-auto">
          <Header/>
          <Articles/>
        </div>
      </main>
    </>
  )
}
export default App

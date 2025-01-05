import Banner from "./components/banner/Banner"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import HeadingTitle from "./components/heading/HeadingTitle"
import Partner from "./components/partners/Partner"
import TypeWriter from "./components/typewriter/TypeWriter"
import Portfolio from "./pages/portfolio/Portfolio"


function App() {

  return (
    <>
      <div className="container mx-auto h-[90vh]">
        <div className="mx-[5rem]">
          <Header />
          <TypeWriter />
          <Banner />
          <HeadingTitle />
          <Partner />
          <Portfolio />
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App

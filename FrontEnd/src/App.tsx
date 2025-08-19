import './App.css'
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      <main className="flex-1 pt-16"></main>
      <Footer />
    </div>
  )
}

export default App

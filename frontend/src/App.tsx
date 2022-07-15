import NotificationButton from "./components/NotificationButton";
import Header from "./components/header";
import SaleCard from "./components/SaleCard";

function App() {
  return (
    <>
      < Header />
      <main>
        <section className="dsmeta-container">
          <div className="sales">
            < SaleCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
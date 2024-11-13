import { CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Catálogo de vehículos
          </h1>
          <p>Busca, encuentra y alquila un coche de la mejor calidad</p>

          <div className="home__filters">
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter  />
              <CustomFilter  />
            </div>
          </div>
        </div>
      </div>
    </main>)
}

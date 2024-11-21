"use client";

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { fuels, yearsOfProduction } from "../constants";
import { useEffect, useState } from "react";
import { CarProps } from "@/types";

export default function Home() {
  const [allCars, setAllCars] = useState<CarProps[] | { message: string }>([]);

  const [loading, setLoading] = useState(false);

  // search states

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // filter states

  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2024);

  // pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);

    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2024,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });

      if (Array.isArray(result)) {
        setAllCars(result);
      } else {
        setAllCars({ message: "Error al cargar los datos" });
      }
    } catch (error) {
      setAllCars({ message: "Hubo un error al cargar los coches" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, fuel, year, limit]);

  /* const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars; */

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catálogo de vehículos</h1>
          <p>Busca, encuentra y alquila un coche de la mejor calidad</p>

          <div className="home__filters">
            <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
              <CustomFilter
                title="year"
                options={yearsOfProduction}
                setFilter={setYear}
              />
            </div>
          </div>
        </div>

        {Array.isArray(allCars) ? (
          allCars.length > 0 ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars.map((car, index) => (
                  <CarCard
                    key={`${car.make}-${car.model}-${index}`}
                    car={car}
                  />
                ))}
              </div>

              {loading && (
                <div className="mt-16 w-full flex-center">
                  <Image
                    src="/loader.svg"
                    alt="loader"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              )}

              <ShowMore
                pageNumber={limit / 10}
                isNext={limit > allCars.length}
                setLimit={setLimit}
              />
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">
                Oh no, no hay coches que mostrar
              </h2>
            </div>
          )
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oh no, no hay coches que mostrar
            </h2>
            <p>{allCars.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

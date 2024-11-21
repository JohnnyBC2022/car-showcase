import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, fuel, limit, model } = filters;

    const headers = {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
        'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST || '',
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, { headers: headers, });

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in euros
    const kilometerFactor = 0.1; // Additional rate per kilometer
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on kilometer and age
    const kilometerRate = city_mpg * kilometerFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + kilometerRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}

export const translations: Record<string, string> = {
    city_mpg: "Consumo en ciudad",
    class: "Clase",
    combination_mpg: "Consumo combinado",
    cylinders: "Cilindros",
    displacement: "Cilindrada (L)",
    drive: "Tracción",
    fuel_type: "Tipo de combustible",
    highway_mpg: "Consumo en carretera",
    make: "Marca",
    model: "Modelo",
    transmission: "Transmisión",
    year: "Año",
};

export const generateCarImgageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");

    const { make, year, model } = car;

    url.searchParams.append("customer", "img"); url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", `${year}`); url.searchParams.append("angle", `${angle}`);

    return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);

    const newPathname = `${window.location.pathname
        }?${searchParams.toString()}`;

    return newPathname;
}
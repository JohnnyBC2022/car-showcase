import { CustomFilter } from '@/components';
import exp from "constants";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
    selected: string;
    setSelected: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface OptionsProps {
    title: string;
    value: string;
}

export interface CustomFilterProps<T = string> {
    title: string;
    options: OptionsProps[];
    setFilter: (value: T) => void;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (newLimit: number) => void;
}

export interface SearchBarProps {
    setManufacturer: React.Dispatch<React.SetStateAction<string>>;
    setModel: React.Dispatch<React.SetStateAction<string>>;
}
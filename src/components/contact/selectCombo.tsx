"use client"
import { useState } from "react";
import { FormControl } from "../ui/form";
import { ComboboxItem, ComboboxProvider } from "./combobox";

interface Person {
  id: number;
  name: string;
}

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
] satisfies Person[];
interface WithinFormProps {
  placeholder: string;
  className?: string;

}
export const WithinForm = () => {
  const [search, setSearch] = useState('');

  const filteredPeople =
    search === ''
      ? people
      : people.filter(
          (person) =>
            person.id
              .toString()
              .includes(search.toLowerCase().replace(/\s+/g, '')) ||
            person.name
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(search.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <FormControl>
      <ComboboxProvider
        placeholder="Select a person"
        displayValue={(person: Person) => person.name}
        shouldFilter={false}
        search={search}
        onSearchChange={(val) => setSearch(val)}
        multiple
      >
        {filteredPeople.map((person) => (
          <ComboboxItem key={person.id} value={person} className="">
            {person.name}
          </ComboboxItem>
        ))}
      </ComboboxProvider>
  
    </FormControl>
  );
};

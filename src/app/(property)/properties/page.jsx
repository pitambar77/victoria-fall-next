import { FilterProvider } from "@/context/FilterContext";
import ListingsPage from "@/Pages/Property/PrpertiesLanding/ListingsPage";

export default function Page() {
  return (
    <FilterProvider>
      <ListingsPage />
    </FilterProvider>
  );
}

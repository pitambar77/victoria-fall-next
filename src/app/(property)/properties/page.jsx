import { FilterProvider } from "@/context/FilterContext";
import ListingsPage from "@/pages/Property/PrpertiesLanding/ListingsPage";

export default function Page() {
  return (
    <FilterProvider>
      <ListingsPage />
    </FilterProvider>
  );
}
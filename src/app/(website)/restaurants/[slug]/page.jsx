
import { getRestaurantBySlug } from "@/api/restaurantApi.js";
import ResturantsDetails from "@/Pages/Resturants/ResturantsDetails/ResturantsDetails";

export default async function Page({ params }) {
  const { slug } = await params;
  const res = await getRestaurantBySlug(slug);
  const restaurant = res.data;

  return <ResturantsDetails restaurant={restaurant} />;
}

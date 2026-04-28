import ResturantsDetails from "@/pages/Resturants/ResturantsDetails/ResturantsDetails";
import { getRestaurantBySlug } from "@/api/restaurantApi";

export default async function Page({ params }) {
    const { slug } = await params;
  const res = await getRestaurantBySlug(slug);
  const restaurant = res.data;

  return <ResturantsDetails restaurant={restaurant} />;
}

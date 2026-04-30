import RestaurantForm from "@/Pages/Restaurants/RestaurantForm";


export default async function Page({ params }) {
  const { id } = await params;
  return <RestaurantForm id={id} />;
}

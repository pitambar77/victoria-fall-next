import PropertyDetailsPage from "@/Pages/PropertyDetailsPage/PropertyDetailsPage";


export default async function Page({ params }) {
  const { slug } = await params;
  return <PropertyDetailsPage slug={slug} />;
}

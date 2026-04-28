import EditProperty from "@/components/properties/EditProperty";


export default async function Page({ params }) {
    const {slug} = await params
  return <EditProperty slug={slug} />;
}
import ActivityForm from "@/pages/Activities/ActivityForm";

export default async function Page({ params }) {
    const {id} = await params
  return <ActivityForm id={id} />;
}
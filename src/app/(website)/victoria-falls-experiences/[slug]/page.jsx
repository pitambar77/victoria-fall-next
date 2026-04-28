import ExperienceDetails from "@/pages/ExperienceDetails/ExperienceDetails";

export default async function Page({ params }) {
    const {slug} = await params
  return <ExperienceDetails slug={slug} />;
}
import ExperienceDetails from "@/Pages/ExperienceDetails/ExperienceDetails";

export default async function Page({ params }) {
  const { slug } = await params;
  return <ExperienceDetails slug={slug} />;
}

import Card from "@/components/Card";
import CardImage from "@/components/CardImage";


export default function Home() {
  return (
    <section id="home" className="grid grid-cols-1 sm:grid-cols-2 items-center h-screen sm:px-35 xl:80">
      <CardImage />
      <Card />
    </section>

  );
}

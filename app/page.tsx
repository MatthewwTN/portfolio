import { Button } from "@/components/ui/button";
import NavLink from "@/components/ui/nav-links";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-4xl font-bold">Matthew Negasi</h1>
        <p className="text-lg opacity-75">Software Engineer @ Clever</p>

        <NavLink href="/about">
          <Button className="mt-8"> Learn More </Button>
        </NavLink>
      </div>
    </section>
  );
}

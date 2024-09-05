import { sleep } from "@/lib/utils";

export default async function Page() {
  await sleep(200);

  return (
    <section>
      <div>
        <h1 className="text-2xl font-medium">Contact Me</h1>
        <p className="text-sm opacity-50">
          You can contact me at mtnegasi@gmail.com
        </p>
      </div>
    </section>
  );
}

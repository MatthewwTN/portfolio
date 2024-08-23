import { sleep } from "@/lib/utils";

export default async function Page() {
  await sleep(200);

  return (
    <section>
      <div>
        <h1 className="text-2xl font-medium">My Education</h1>
        <p className="text-sm opacity-50">Seattle Pacific University</p>
      </div>
    </section>
  );
}

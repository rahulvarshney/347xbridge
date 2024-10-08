import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-1 py-8 mx-auto bg-[#86efac] grid grid-cols-4 gap-4">
        <div class="basis-1/3">Points</div>
        <div class="basis-2/3">13-21</div>
        <div class="basis-2/3">Bid</div>
        <div>Restrictions/Comments/Rebids</div>
        <div>1 of a suit</div>
        <div>&ge; 5 card major suit; If no 5 card major then bid longer minor (if 3-3 bid 1C: if 4-4 bid 1d)

        </div>

        <div class="text-4xl font-bold">WRAP</div>
        <div class="my-4">
          Try updating this message in the OOH YEAH SOME LIKE IT RW
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </div>
        <Counter count={count} />
      
    </div>
  );
}
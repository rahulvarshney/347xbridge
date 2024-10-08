import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-1 py-8 mx-auto bg-[#86efac]">
      <div class="flex flex-row flex-wrap">

        <p>Points</p>
        <p>13-21</p>
        <p>Bid</p>

        <h3 class="title flex-title">
          <span class="title-main">Main Title Here</span>
          <span class="title-note">This is a good look, right here.</span>
        </h3>
      </div>
    </div>
  );
}
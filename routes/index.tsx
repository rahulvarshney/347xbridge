import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-1 py-8 mx-auto bg-[#86efac]">
      <div class="flex flex-wrap">
        <table>
          <tr>
          <th>Points</th> 
          <th>Bid</th>
          <th>RcR</th>
          </tr>
          <tr><td>13-21</td>
          <td>1 of a suit</td>
          <td>&ge; 5 card major suit; If no 5 card major then bid longer minor (if 3-3 bid 1C: if 4-4 bid 1d)</td>
          </tr>

        </table>
        <p>Points</p>
        <p>13-21</p>
        <p>Bid</p>
        
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">WRAP</h1>
        <p class="my-4">
          Try updating this message in the OOH YEAH SOME LIKE IT RW
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />
      </div>
    </div>
  );
}
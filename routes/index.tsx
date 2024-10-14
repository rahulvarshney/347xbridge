import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
<div class="grid">
  <span class="xpoints">
    <strong>Points</strong>
  </span>
  <span class="xbid">
    <strong>Bid</strong>
  </span>  
  <span class="xrcr">
    <strong>Restrictions/Comments/Rebids</strong>
  </span>
  <span class="xpointsvalue">13-21</span>
  <span class="xbidvalue">1 of a suit</span>
  <span class="xrcrvalue">&ge; 5 card major suit; If no 5 card major then bid longer minor 
          (If 3-3, bid 1C; if 4-4 then bid 1D)
  </span>
  <span class="xtmp">Rule of 20</span>
  <span class="xtmp">For weaker hands, add the number of cards
    in your two longest suits to your HCP. 
    If the total is 20 or more make a normal opening bid of 1 of a suit.</span>
    <span class="xtmp">
      <p>&#10086;Use this rule only on first and second seat.
      (that means your partner has not yet had a chance to bid)
      </p>
      <p>&#10086; Other restrictions as above.</p>
    </span>
</div>

  );
}
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
<div class="grid">
  <span>
    <strong>Points</strong>
  </span>
  <span>
    <strong>Bid</strong>
  </span>  
  <span>
    <strong>Restrictions/Comments/Rebids</strong>
  </span>
  <span>13-21</span>
  <span>1 of a suit</span>
  <span>&ge; 5 card major suit; If no 5 card major then bid longer minor 
          (If 3-3, bid 1C; if 4-4 then bid 1D)
  </span>
  <span>Rule of 20</span>
  <span>For weaker hands, add the number of cards
    in your two longest suits to your HCP. 
    If the total is 20 or more make a normal opening bid of 1 of a suit.</span>
    <span>
      <ul>
        <li>Use this rule only on first and second seat.
          (that means your partner has not yet had a chance to bid)
        </li>
        <li>Other restrictions as above.
        </li>
      </ul>
    </span>
</div>

  );
}
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
<div class="grid">
  <span class="xtitle"><b><i>AMERICAN STANDARD BIDDING</i></b> (CONDENSED) &copy; 2024 Ramesh Varshney</span>
  <span class="xcaption">ABBREVIATIONS: See at the end of page 6</span>
  <span class="xheading">OPENING BIDS: (Count LSP(1 point for each additional card over 4 cards in a suit) but not SSP)</span>
  <span class="xrow1A">
    <strong>Points</strong>
  </span>
  <span class="xrow1B">
    <strong>Bid</strong>
  </span>  
  <span class="xrow1C">
    <strong>Restrictions/Comments/Rebids</strong>
  </span>
  <span class="xrow2A">13-21</span>
  <span class="xrow2B">1 of a suit</span>
  <span class="xrow2C">&ge; 5 card major suit; If no 5 card major then bid longer minor 
          (If 3-3, bid 1C; if 4-4 then bid 1D)
  </span>
  <span class="xrow3A">Rule of 20</span>
  <span class="xrow3B">For weaker hands, add the number of cards
    in your two longest suits to your HCP. 
    If the total is 20 or more make a normal opening bid of 1 of a suit.</span>
    <span class="xrow3C">
      <p>&#10086;Use this rule only on first and second seat.
      (that means your partner has not yet had a chance to bid)
      </p>
      <p>&#10086; Other restrictions as above.</p>
    </span>
    <span class="xrow4A">15-17 HCP</span>
    <span class="xrow4B">
      <p>(A) BH: 1NT(NF)</p>
      <br></br>
      <p>(B) NBH: 1 of a suit(NF)</p>
    </span>
    <span class="xrow4C">
      <p>(A)BH: No void, No singleton & No more than one doubleton.</p>
      <p>(B) Jump or reverse bid next with 16 or 17 HCP</p>
    </span>
</div>

  );
}
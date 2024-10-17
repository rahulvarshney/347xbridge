import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
<div class="grid">
  <span class="xtitle"><b><i>AMERICAN STANDARD BIDDING</i></b> (CONDENSED)</span>
  <span class="xcopyright">&copy; 1996-2024 Ramesh Varshney</span>
  <span class="xcaption"><span style="color:red;"><b><u>ABBREVIATIONS:</u></b></span> See at the end of page 6</span>
  <span class="xheading"><span style="color:red;"><b><u>OPENING BIDS:</u></b></span> (Count LSP(1 point for each additional card over 4 cards in a suit) but not SSP)</span>
  <span class="xfooter">
  For comments/suggestions <span style="color:blue;"><u><i><a href="mailto:347xbridge@gmail.com">contact Ramesh, email 347xbridge@gmail.com</a></i></u></span>, <a href="tel:+13479274343">Ph:(347) 927-4343</a>, Rev: 2A (06/11)
  </span>
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
    <span class="xrow4A">
      <p>15-17</p>
      <p>HCP</p>
    </span>
    <span class="xrow4B">
      <p>(A) BH: 1NT(NF)</p>
      <br></br>
      <p>(B) NBH: 1 of a suit(NF)</p>
    </span>
    <span class="xrow4C">
      <p>(A)BH: No void, No singleton & No more than one doubleton.</p>
      <p>(B) Jump or reverse bid next with 16 or 17 HCP</p>
    </span>
    <span class="xrow5A">
      <p>20-21</p>
      <p>HCP</p>
    </span>
    <span class="xrow5B">
      <p>(A) BH: 2NT (NF)</p>
      <p>(B) NBH: 1 of a suit (NF)</p>
    </span>
    <span class="xrow5C">
    <p>(A) BH: As above</p>
    <p>(B) Jump shift next time</p>
    </span>
    <span class="xrow6A">
      &ge;22 HCP
    </span>
    <span class="xrow6B">
      2C (F)
    </span>
    <span class="xrow6C">
    &ge;22 HCP or you have 9 tricks in your hand
    </span>
    <span class="xrow7A">
    6-11 HCP
    </span>
    <span class="xrow7B">
      <p>2 of a 6 card suit (except 2C) (NF)</p>    
      <p>Weak 2 bid</p>
    </span>
    <span class="xrow7C">
      <p>&ge;2 of the top 4 honors, no 4 card major side suit.</p>
      <p>Preferably no void.</p>
    </span>
    <span class="xrow8A">
      6-10 HCP
    </span>
    <span class="xrow8B">
    3 of a 7 cards suit (Preempt bid)(NF)
    </span>
    <span class="xrow8C">
    &ge;2 honors in the suit
    </span>

</div>

  );
}
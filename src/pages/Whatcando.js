
//import { hot } from 'react-hot-loader/root';
import React from "react";
function Whatcando() {

  return (

   <div className="grid_24" id="whatcando">

  <section className="content" >
    <h1>What You Can Do </h1>
    <article className="text">

      <h2>Reduce, Reuse, Recycle  </h2>

    <figure id="threeRs">
      <figcaption>
        <p>There are three key factors when thinking about how to recycle – The 3 R’s: Reduce, Reuse, Recycle</p>
      </figcaption>

      {/* {{!-- <img id="reduceImage" src="./images/Large/reduce-greenfootprints-com.png" alt="reduce-green-foot-prints-com" />
      <img id="reuseImage" src="./images/Large/recycle-greenfootprints-com.png" alt="reduce-green-foot-prints-com" />
      <img id="recycleImage" src="./images/Large/reuse-greenfootprints-com.png" alt="reduce-green-foot-prints-com" /> --}} */}

    </figure>

      <h2>Recycling Different Materials </h2>

<p id="diff_mat_text">You can find out how to recycle different materials such as Glass, Batteries and Mobile Phones by simply using our list on the right hand side.</p>

      <ul id="different-materials">
        <li><a href="http://www.recycling-guide.org.uk/materials/plastic.html">Plastic Bottles</a></li>
        <li><a href="http://www.recycling-guide.org.uk/materials/batteries.html">Batteries</a></li>
        <li><a href="http://www.recycling-guide.org.uk/materials/glass.html">Glass Bottles</a></li>
        <li><a href="http://www.recycling-guide.org.uk/materials/mobiles.html">Mobile Phones</a></li>

      </ul>

      <h2>Recycling Ettiquette </h2>
      <p>Recycling can sometimes be confusing and it can be difficult to know whether you are following
        all the right rules. Improve your recycling efforts by learning some recycling etiquette rules
        and check out which type of collection is best and why different areas recycle and collect in
        different ways.</p>

      <h2>What’s in your Rubbish Bin? </h2>
      <figure className="recycle_img">
        <img id="mainImageOne" src="./images/Large/gif-images/Recycling_image_2.gif" alt="recycling-advice-green-foot-prints-com" />
      </figure>
      <p>A large percentage of UK household’s still do not recycle enough and throw everything that they
        consider ‘rubbish’ into their ordinary bin. Much of this waste can be recycled and should be
        disposed of separately to general household waste. Look inside this rubbish bin to see how much
        of the contents should actually have been recycled. Check our list on the right to see how to
        recycle different materials.</p>

      <h2>Where can you recycle? </h2>

      <p>As well as home recycling bins, there are many recycling banks across the UK that can be used to recycle different materials. They are located on streets across the UK as well as in  supermarkets and outside housing estates. </p>
<figure class="recycle_img_right">
        <img id="mainImageTwo" src="./images/Large/recylingbins-greenfootprints-com.png" alt="recycling-advice-green-foot-prints-com" />
      </figure>
        <p> Most recycling banks are emptied on a regular  basis. However, if you do come across one that is over-flowing, contact your local council who will arrange for the bank to be emptied. You can also contact your local council to report vandalism to the recycle banks.</p>

        <p> To find out where your local recycling bank is or if you want to know which materials can be recycled where, check the recycling point search <a href="#http://www.google.com">here</a>.
      </p>

      <br />
    </article>
  </section>

  <div class="clearfix"></div>

</div>


  );
}

export default Whatcando;

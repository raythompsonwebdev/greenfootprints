import React from 'react';
import recycleCircle from '../static/images/JPG/recycle-continuous-circle-greenfootprints-com.jpg';
import inRubbishBin from '../static/images/JPG/what-is-in-your-rubbish-bin.jpg';
import whatCanImg from '../static/images/gif-images/Recycling_image_1.gif';
import familyHomeImg from '../static/images/gif-images/family_home_page.gif';
//import recycleMaterialImg from '../static/images/JPG/recylingbins-greenfootprints-com.jpg';

function Whatcando() {
  return (
    <div className="page-wrapper" id="whatcando">
      <main className="content">
        <h2 className="content-title">What You Can Do </h2>
        <article className="text" id="whatcando-page">
          <figure id="three-rs">
            <img
              className="whatcando-image"
              src={recycleCircle}
              alt="recycle-continuous-circle"
            />
            <figcaption>
              <h3>Reduce, Reuse, Recycle </h3>
              <p>
                There are three key factors when thinking about how to recycle –
                The 3 R’s: Reduce, Reuse, Recycle
              </p>
            </figcaption>
          </figure>

          <figure id="in-rubbish-bin">
            <img
              className="whatcando-image"
              id="mainImageOne"
              src={inRubbishBin}
              alt="what-is-in-your-rubbish-bin"
            />
            <figcaption>
              <h3>What’s in your Rubbish Bin? </h3>
              <p>
                A large percentage of UK household’s still do not recycle enough
                and throw everything that they consider ‘rubbish’ into their
                ordinary bin.{' '}
              </p>
              <p>
                Much of this waste can be recycled and should be disposed of
                separately to general household waste. Look inside this rubbish
                bin to see how much of the contents should actually have been
                recycled.{' '}
              </p>
              <p>
                Check our list to the left to see how to recycle different
                materials.
              </p>
            </figcaption>
          </figure>

          <figure id="different-materials">
            <img
              className="whatcando-image"
              src={whatCanImg}
              alt="reduce-green-foot-prints-com"
            />
            <figcaption>
              <h3>Recycling Different Materials </h3>

              <p>
                You can find out how to recycle different materials such as
                Glass, Batteries and Mobile Phones by simply using our list on
                the right hand side.
              </p>

              <ul id="different-materials-list">
                <li className="different-materials-list-item">
                  <a
                    href="http://www.recycling-guide.org.uk/materials/plastic.html"
                    className="different-materials-list-link">
                    Plastic Bottles
                  </a>
                </li>
                <li className="different-materials-list-item">
                  <a
                    href="http://www.recycling-guide.org.uk/materials/batteries.html"
                    className="different-materials-list-link">
                    Batteries
                  </a>
                </li>
                <li className="different-materials-list-item">
                  <a
                    href="http://www.recycling-guide.org.uk/materials/glass.html"
                    className="different-materials-list-link">
                    Glass Bottles
                  </a>
                </li>
                <li className="different-materials-list-item">
                  <a
                    href="http://www.recycling-guide.org.uk/materials/mobiles.html"
                    className="different-materials-list-link">
                    Mobile Phones
                  </a>
                </li>
              </ul>
            </figcaption>
          </figure>

          <figure id="recycle-ettiqutte">
            <img
              className="whatcando-image"
              src={familyHomeImg}
              alt="family_home_page"
            />
            <figcaption>
              <h3>Recycling Ettiquette </h3>
              <p>
                Recycling can sometimes be confusing and it can be difficult to
                know whether you are following all the right rules.
              </p>
              <p>
                {' '}
                Improve your recycling efforts by learning some recycling
                etiquette rules and check out which type of collection is best
                and why different areas recycle and collect in different ways.
              </p>
            </figcaption>
          </figure>

          <figure id="where-to-recycle">
            <figcaption id="recycle_where_caption">
              <h3>Where can you recycle? </h3>
              <p>
                As well as home recycling bins, there are many recycling banks
                across the UK that can be used to recycle different materials.
                They are located on streets across the UK as well as in
                supermarkets and outside housing estates.{' '}
              </p>
              <p>
                {' '}
                Most recycling banks are emptied on a regular basis. However, if
                you do come across one that is over-flowing, contact your local
                council who will arrange for the bank to be emptied. You can
                also contact your local council to report vandalism to the
                recycle banks.
              </p>
              <p>
                {' '}
                To find out where your local recycling bank is or if you want to
                know which materials can be recycled where, check the recycling
                point search <a href="http://www.google.com">here</a>.
              </p>
            </figcaption>
            {/* <img
              className="whatcando-image-right"
              id="mainImageTwo"
              src={recycleMaterialImg}
              alt="recycling-materials"
            /> */}
          </figure>
          <br />
        </article>
      </main>
    </div>
  );
}

export default Whatcando;

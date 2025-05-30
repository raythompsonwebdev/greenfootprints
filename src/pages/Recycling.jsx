import mobileBatteries from '../static/images/webp/Image-mobile-batteries.webp';
// import mobileBatteries103 from 'static/images/webp/Image-mobile-batteries-103.webp';
// import mobileBatteries113 from 'static/images/webp/Image-mobile-batteries-113.webp';

function Recycling() {
  return (
    <div className="page-wrapper" id="recycling">
      <main className="content">
        <h2 className="content-title">Recycling consumer waste</h2>

        <article className="text">
          <p>
            Recycling is processing used materials (waste) into new products to
            prevent waste of potentially useful materials, reduce the
            consumption of fresh raw materials, reduce energy usage, reduce air
            pollution (from incineration) - and water pollution (from
            landfilling) by reducing the need for &quot;conventional&quot; waste
            disposal, and lower greenhouse gas emissions as compared to virgin
            production.
          </p>
          <p>
            {' '}
            Recycling is a key component of modern waste reduction and is the
            third component of the &quot;Reduce, Reuse, Recycle&quot; waste
            hierarchy.
          </p>
          <p>
            There are some ISO standards relating to recycling such as ISO
            15270:2008 for plastics waste and ISO 14001:2004 for environmental
            management control of recycling practice.
          </p>

          <img
            className="recycle-page-img"
            src={mobileBatteries}
            // srcSet="static/images/webp/Image-mobile-batteries-113.webp 113w, static/images/webp/Image-mobile-batteries-103.webp 103w"
            // sizes="(min-width: 1281px) 123px,(max-width: 1280px) 113px,(max-width: 800px) 103px, (max-width: 360px) 103px, 35vw"
            alt="mobile-batteries-green-foot-prints-com"
          />

          <p>
            Recyclable materials include many kinds of glass, paper, metal,
            plastic, textiles, and electronics. Although similar in effect, the
            composting or other reuse of biodegradable waste - such as food or
            garden waste - is not typically considered recycling.{' '}
          </p>

          <p>
            Materials to be recycled are either brought to a collection center
            or picked up from the curbside, then sorted, cleaned, and
            reprocessed into new materials bound for manufacturing. In the
            strictest sense, recycling of a material would produce a fresh
            supply of the same material—for example, used office paper would be
            converted into new office paper, or used foamed polystyrene into new
            polystyrene.{' '}
          </p>

          <p>
            {' '}
            However, this is often difficult or too expensive (compared with
            producing the same product from raw materials or other sources), so
            &quot;recycling&quot; of many products or materials involves their
            reuse in producing different materials (e.g., paperboard) instead.
            Another form of recycling is the salvage of certain materials from
            complex products, either due to their intrinsic value (e.g., lead
            from car batteries, or gold from computer components), or due to
            their hazardous nature (e.g., removal and reuse of mercury from
            various items).
          </p>

          <p>
            Critics dispute the net economic and environmental benefits of
            recycling over its costs, and suggest that proponents of recycling
            often make matters worse and suffer from confirmation bias.
            Specifically, critics argue that the costs and energy used in
            collection and transportation detract from (and outweigh) the costs
            and energy saved in the production process; also that the jobs
            produced by the recycling industry can be a poor trade for the jobs
            lost in logging, mining, and other industries associated with virgin
            production; and that materials such as paper pulp can only be
            recycled a few times before material degradation prevents further
            recycling.Proponents of recycling dispute each of these claims, and
            the validity of arguments from both sides has led to enduring
            controversy.
          </p>
          <br />
          <br />
        </article>
      </main>
    </div>
  );
}

export default Recycling;

//import { hot } from 'react-hot-loader/root';
import React from "react";

const Contacts = () => {

  return(

   <div className="grid_24" id="contact">

    <section className="content">

      <h1>Contact Us</h1>

      <article className="text">


        <address id="recycle-contact">

          <address></address>

          <p id="location">Green Recycling Ltd,<br /> Quayside Industrial Park,<br /> Bates Road,<br /> Maldon,<br /> Essex,<br /> CM9 5FA</p>

          <p id="telephone">Telephone : 01628 942600 <br /> Fax : 01628 974630 </p>

          <span id="email">
            <p >Email : sales@greenfootprints.com</p>
            <p >Email : house@greenfootprints.com</p>
            <p>Any emails will be answered same day..</p>
          </span>

          <span id="links">
            <p>Further Information on Recycling Please Visit</p>
            <p><a href="http://www.recycling-guide.org.uk">http://www.recycling-guide.org.uk</a></p>
            <p><a href="http://www.recyclezone.org.uk/">http://www.recyclezone.org.uk/</a></p>
            <p><a href="http://www.greenrecycling.co.uk/">http://www.greenrecycling.co.uk/.</a>
            </p>
          </span>

          <span id="registration">

            <p>Registered Carriers of Waste Registration Number : AEA/792880/CT (Issuing Authority: AEA).</p>
            <p>Waste Managment Licence : EAWML-72693.</p>

          </span>

        </address>

      </article>

      <div className="clearfix"> </div>

    </section>

  </div>
  );

}

export default Contacts;



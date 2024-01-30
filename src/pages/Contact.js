import React from 'react';

const Contacts = () => {
  return (
    <div className="page-wrapper" id="contact">
      <main className="content">
        <h2 className="content-title">Contact Us</h2>

        <article className="text">
          <address id="recycle-contact">
            <p id="location">
              Green Recycling Ltd,
              <br /> Quayside Industrial Park,
              <br /> Bates Road,
              <br /> Maldon,
              <br /> Essex,
              <br /> CM9 5FA
            </p>

            <p id="telephone">
              Telephone : 01628 942600 <br /> Fax : 01628 974630{' '}
            </p>

            <span id="email">
              <p>Email : sales@greenfootprints.com</p>
              <p>Email : house@greenfootprints.com</p>
              <p>Any emails will be answered same day..</p>
            </span>

            <span id="links">
              <p>Further Information on Recycling Please Visit</p>
              <p>
                <a
                  className="recycle-contact-link"
                  href="http://www.recycling-guide.org.uk">
                  http://www.recycling-guide.org.uk
                </a>
              </p>
              <p>
                <a
                  className="recycle-contact-link"
                  href="http://www.recyclezone.org.uk/">
                  http://www.recyclezone.org.uk/
                </a>
              </p>
              <p>
                <a
                  className="recycle-contact-link"
                  href="http://www.greenrecycling.co.uk/">
                  http://www.greenrecycling.co.uk/.
                </a>
              </p>
            </span>

            <span id="registration">
              <p>
                Registered Carriers of Waste Registration Number : AEA/792880/CT
                (Issuing Authority: AEA).
              </p>
              <p>Waste Managment Licence : EAWML-72693.</p>
            </span>
          </address>
        </article>
      </main>
    </div>
  );
};

export default Contacts;

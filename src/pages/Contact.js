import React from 'react';

const Contacts = () => {
  return (
    <div className="page-wrapper" id="contact">
      <main className="content">
        <h2 className="content-title">Contact Us</h2>
        <section id="recycle-contact">
          <section id="location">
            <h3>Address</h3>
            <p>Green Recycling Ltd , </p>
            <p>Quayside Industrial Park, </p>
            <p>Bates Road,</p>
            <p>Maldon, </p>
            <p>Essex, </p>
            <p>CM9 5FA</p>
          </section>
          <section id="telephone">
            <h3>Telephone and Fax</h3>
            <p>Telephone: 01628 942600 </p>
            <p>Fax : 01628 974630 </p>
          </section>
          <section id="email">
            <h3>Email</h3>
            <p>Email : sales@greenfootprints.com</p>
            <p>Email : house@greenfootprints.com</p>
            <p>Any emails will be answered same day..</p>
          </section>
          <section id="links">
            <h3>Further Information on Recycling Please Visit</h3>
            <address>
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
            </address>
          </section>
          <section id="registration">
            <h3>Registration</h3>
            <p>
              {' '}
              Registered Carriers of Waste Registration Number : AEA/792880/CT
              (Issuing Authority: AEA).{' '}
            </p>
            <p>Waste Managment Licence : EAWML-72693. </p>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Contacts;

import FeedBackForm from '../components/FeedBackForm.jsx';

const Contacts = () => {
  return (
    <div className="page-wrapper" id="contact">
      <main className="content">
        <h2 className="content-title">Contact Us</h2>
        <section id="recycle-contact">
          <section id="location">
            <p>
              Green Recycling Ltd, Quayside Industrial Park, Bates Road, Maldon,
              Essex, CM9 5FA
            </p>
          </section>
          <section id="telephone">
            <p>
              <strong>Telephone :</strong> 01628 942600 | <strong>Fax :</strong>{' '}
              01628 974630
            </p>
          </section>
          <section id="email">
            <p>
              <strong> Email :</strong> sales@greenfootprints.com |{' '}
              <strong>Email : </strong>
              house@greenfootprints.com. Any emails will be answered same day..
            </p>
          </section>
          <section id="links">
            <address>
              <a
                className="recycle-contact-link"
                href="http://www.recycling-guide.org.uk">
                http://www.recycling-guide.org.uk
              </a>

              <a
                className="recycle-contact-link"
                href="http://www.recyclezone.org.uk/">
                http://www.recyclezone.org.uk/
              </a>

              <a
                className="recycle-contact-link"
                href="http://www.greenrecycling.co.uk/">
                http://www.greenrecycling.co.uk/.
              </a>
            </address>
          </section>
          <section id="registration">
            <p>
              {' '}
              Registered Carriers of Waste Registration Number : AEA/792880/CT
              (Issuing Authority: AEA). Waste Managment Licence : EAWML-72693.{' '}
            </p>
          </section>
          <section id="feedback-form-container">
            <FeedBackForm />
          </section>
        </section>
      </main>
    </div>
  );
};

export default Contacts;

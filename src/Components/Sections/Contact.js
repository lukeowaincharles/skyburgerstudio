import React from "react";
import * as Icons from "../Icons";
import ContactData from "../../Data/ContactData.json";

function Contact() {
  const CONTENT = ContactData.content;

  // const styles = {
  //   display: {
  //     display: "none",
  //   },
  //   position: {
  //     position: "absolute",
  //     left: "-5000px",
  //   },
  // };

  return (
    <section className="contact background--black" id="contact" name="#contact">
      <div className="container text-center">
        <div className="contact__content">
          <h2>{CONTENT[0].title}</h2>
          <p>{CONTENT[0].text}</p>
        </div>
        <p><a class="email--white" target="_blank" rel="noopener noreferrer" href="mailto:hello@skyburgerstudio.co.uk">hello@skyburgerstudio.co.uk</a></p>
        {/* <div className="form__wrapper" id="mc_embed_signup"> 
          <form
            action="https://skyburgerstudio.us10.list-manage.com/subscribe/post?u=280fcafeadb0bc02f7d812bfc&amp;id=a3337076c3"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <div className="indicates-required small text-right">
                <span className="asterisk">*</span> indicates required
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">
                  Name <span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  name="FNAME"
                  className="required"
                  id="mce-FNAME"
                />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-MMERGE5">
                  Message <span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  name="MMERGE5"
                  className="required"
                  id="mce-MMERGE5"
                />
              </div>
              <div
                id="mergeRow-gdpr"
                className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
              >
                <div className="content__gdpr">
                  <label>Marketing Permissions</label>
                  <p>
                    By sending us a message using this form, you'll be signing
                    up to our mailing list. But don't worry, we won't spam you
                    with emails we'll update you once in a while. If you'd
                    rather not sign up to this mailing then send us an email
                    instead{" "}
                    <a
                      href="mailto:hello@skyburgerstudio.co.uk"
                      className="email email--white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hello@skyburgerstudio.co.uk
                    </a>
                  </p>
                  <p>
                    Please confirm you are happy to receive emails from
                    Skyburger Studio:
                  </p>
                  <fieldset
                    className="mc_fieldset gdprRequired mc-field-group"
                    name="interestgroup_field"
                  >
                    <label className="checkbox subfield" htmlFor="gdpr_38353">
                      <input
                        type="checkbox"
                        id="gdpr_38353"
                        name="gdpr[38353]"
                        value="Y"
                        className="av-checkbox gdpr"
                      />
                      <span>Email</span>{" "}
                    </label>
                  </fieldset>
                  <p className="small">
                    You can unsubscribe at any time by clicking the link in the
                    footer of our emails.
                  </p>
                </div>
                <div className="content__gdprLegal">
                  <p className="small">
                    We use Mailchimp as our marketing platform. By clicking
                    below to subscribe, you acknowledge that your information
                    will be transferred to Mailchimp for processing.{" "}
                    <a
                      href="https://mailchimp.com/legal/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="email email--white"
                    >
                      Learn more about Mailchimp's privacy practices here.
                    </a>
                  </p>
                </div>
              </div>
              <div id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"
                  style={styles.display}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={styles.display}
                ></div>
              </div>
              {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> 
              <div style={styles.position} aria-hidden="true">
                <input
                  type="text"
                  name="b_280fcafeadb0bc02f7d812bfc_a3337076c3"
                  tabIndex="-1"
                />
              </div>
              <div className="clear text-right">
                <input
                  type="submit"
                  value="Message"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button subscribe"
                />
              </div>
            </div>
          </form>
        </div>*/}

        {/* <!--End mc_embed_signup--> */}
      </div>
      <div className="contact__icons">
        <div className="icons__wrapper">
          {Icons.Heart}
          {Icons.Plus}
          {Icons.Code}

          {Icons.Exclaim}
          {Icons.Ok}
          {Icons.Pencil}
        </div>
      </div>
    </section>
  );
}

export default Contact;

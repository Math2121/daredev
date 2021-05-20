import { useState } from "react";
import { Section } from "./style";

export function Faq() {
  const [isOpenAccordion, setIsOpenAccordion] = useState(true);
  return (
    <Section>
      <div className="container">
      
        <div className="row">
          <div className="col-md-12">
            <div className="accordion-wrapper">
              <div
                className={`accordion-title ${isOpenAccordion ? "open" : ""}`}
                onClick={() => {
                  setIsOpenAccordion(!isOpenAccordion);
                }}
              >
                Lorem Ipsum ?
              </div>

              <div
                className={`accordion-item ${
                  isOpenAccordion ? "collapsed" : ""
                }`}
              >
                <div className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Expedita minus veritatis quo culpa quaerat velit ex
                  praesentium rem et nam, vitae, odio obcaecati sunt sed a
                  commodi dolore fuga eaque.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

import React, { useEffect, useState, useReducer } from "react";
const Accordion = (props) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
        setButtonClass(toggle? "accordion-button collapsed":"accordion-button");
        setShowClass(toggle? "accordion-collapse collapse":"accordion-collapse collapse show");
    }
    const [buttonClass, setButtonClass] = useState("accordion-button collapsed");
    const [showClass, setShowClass] = useState("accordion-collapse collapse");

  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class={buttonClass}
              type="button"
              onClick={
                handleToggle
              }
            >
              {props.heading}
            </button>
          </h2>
          <div
            id="collapseOne"
            class={showClass}
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

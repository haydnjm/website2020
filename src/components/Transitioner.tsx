import React from "react";
import { Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";

const duration = 750;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  transform: "translate(0, 5px)",
};

const transitionStyles: { [x in TransitionStatus]?: any } = {
  entering: { opacity: 1, transform: "translate(0px)" },
  entered: { opacity: 1, transform: "translate(0px)" },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

type Props = {
  show: boolean;
  duration?: number;
};

const Transitioner: React.FC<Props> = ({ show, duration = 750, children }) => {
  return (
    <Transition timeout={duration} in={show}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default Transitioner;

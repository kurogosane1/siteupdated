export const Lists = {
  initial: {
    x: 0,
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,

    transition: {
      ease: "linear",
      duration: 1,
    },
    opacity: 1,
  },
};

export const ProjectsList = {
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      ease: "easeInOut",
    },
  }),
  initial: (i) => ({
    y: i === 0 ? -10 : -50 * i,
    opacity: 0,
  }),
};

export const LeftArt = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
    },
    opacity: 1,
  },
  exit: {
    x: -100,
    opacity: 0,
  },
};

export const RightArt = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
    },
    opacity: 1,
  },
  exit: {
    x: 100,
    opacity: 0,
  },
};

export const RightArt2 = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    transition: {
      delay: 0.2,
      duration: 1,
    },
    opacity: 1,
  },
  exit: {
    x: 100,
    opacity: 0,
  },
};
export const RightArt3 = {
  initial: {
    x: "100px",
    opacity: 0,
  },
  animate: {
    x: 0,
    transition: {
      delay: 1,
      duration: 1,
    },
    opacity: 1,
  },
  exit: {
    x: 100,
    opacity: 0,
  },
};

export const list1 = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 1,
    },
  },
};

export const list2 = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      ease: "linear",
      duration: 1,
    },
  },
};

export const list3 = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      ease: "linear",
      duration: 1,
    },
  },
};

export const list4 = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      ease: "linear",
      duration: 1,
    },
  },
};
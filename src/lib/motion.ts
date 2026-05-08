import type { Variants } from "motion/react";

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionViewport = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -12% 0px"
} as const;

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.985,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.28,
      ease: motionEase
    }
  }
};

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(6px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: motionEase
    }
  }
};

export const heroTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 16
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.35,
      ease: motionEase,
      delay: 0.08
    }
  }
};

export const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08
    }
  }
};

export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 38,
    rotateX: 2,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.02,
      ease: motionEase
    }
  }
};

export const archiveCardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 54,
    x: 18,
    rotate: -1.4,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.08,
      ease: motionEase
    }
  }
};

export const navReveal: Variants = {
  hidden: {
    opacity: 0,
    y: -14
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: motionEase,
      delay: 0.08
    }
  }
};

export const mobileMenuReveal: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.32,
      ease: motionEase
    }
  },
  exit: {
    opacity: 0,
    y: -6,
    filter: "blur(6px)",
    transition: {
      duration: 0.22,
      ease: motionEase
    }
  }
};

export const surfaceHover = {
  y: -3,
  transition: {
    duration: 0.28,
    ease: motionEase
  }
};

export const linkHover = {
  y: -1,
  transition: {
    duration: 0.24,
    ease: motionEase
  }
};

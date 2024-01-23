export const textContainer = {
  hidden: {
    opacity: 0
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.3 }
  })
};

export const textVariant = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn'
    }
  }
};

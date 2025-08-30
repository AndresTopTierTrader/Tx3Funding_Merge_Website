export const BUTTON_STYLES = {
  unifiedChallenge: {
    unselected:
      "bg-[#181D28] hover:bg-[#131927] px-2 md:px-8 border border-[#4D516A] text-textPrimary w-full w-32 md:w-56 py-3 text-center text-sm md:text-base hover:cursor-pointer transition-all rounded-lg",
    selected:
      "bg-gradient-to-b from-[#0052B4] px-2 md:px-8 to-[#167ACC] text-textPrimary text-center font-semibold transition-all w-32 md:w-56 py-3 text-sm md:text-base hover:cursor-pointer rounded-lg",
  },
};

export const ANIMATION_VARIANTS = {
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  },
  button: {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  },
};
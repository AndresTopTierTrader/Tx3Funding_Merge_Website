// Ultra-smooth animation configurations for BillingForm

// Container animations for the main form wrapper
export const containerVariants = {
    hidden: { 
        opacity: 0
    },
    visible: { 
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94], // Smoother easing
            staggerChildren: 0.04
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

// Step transition animations - pure fade
export const stepVariants = {
    enter: () => ({
        opacity: 0
    }),
    center: {
        opacity: 1,
        transition: {
            duration: 0.25,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    },
    exit: () => ({
        opacity: 0,
        transition: {
            duration: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    })
};

// Form field animations - minimal fade in
export const fieldVariants = {
    hidden: { 
        opacity: 0
    },
    visible: { 
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

// Button hover and tap animations - ultra subtle
export const buttonVariants = {
    initial: { 
        opacity: 1
    },
    hover: { 
        opacity: 0.9,
        transition: {
            duration: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    },
    tap: { 
        opacity: 0.8,
        transition: {
            duration: 0.05,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

// Loading button animations - smooth opacity
export const loadingButtonVariants = {
    initial: { 
        opacity: 1
    },
    loading: {
        opacity: 0.7,
        transition: {
            duration: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

// Step indicator animations - pure opacity and color
export const stepIndicatorVariants = {
    inactive: {
        opacity: 0.6,
        backgroundColor: "#717892",
        color: "#94a3b8",
        transition: {
            duration: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    },
    active: {
        opacity: 1,
        backgroundColor: "#45D1FF",
        color: "#000000",
        transition: {
            duration: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    },
    completed: {
        opacity: 1,
        backgroundColor: "#45D1FF",
        color: "#000000",
        transition: {
            duration: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

// Progress bar animations - smooth fill
export const progressBarVariants = {
    initial: {
        scaleX: 0,
        opacity: 0.3
    },
    complete: {
        scaleX: 1,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

// Error message animations - pure fade
export const errorVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

// Header text animations - simple fade
export const headerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

// Input field focus animations - no scale, just color
export const inputFocusVariants = {
    blur: {
        borderColor: "#717892",
        transition: {
            duration: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    },
    focus: {
        borderColor: "#45D1FF",
        transition: {
            duration: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

// Stagger children animation for form fields - minimal delay
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02,
            delayChildren: 0.05
        }
    }
};

// Ultra-smooth page transitions
export const pageTransition = {
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.25
};

// Spring configurations - all gentle
export const springConfigs = {
    gentle: {
        type: "tween",
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.2
    },
    snappy: {
        type: "tween",
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.15
    },
    bouncy: {
        type: "tween",
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.1
    },
    premium: {
        type: "tween",
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.15
    },
    subtle: {
        type: "tween",
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.1
    },
    instant: {
        type: "tween",
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.05
    }
};
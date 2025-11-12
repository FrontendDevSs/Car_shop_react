import { motion } from "framer-motion";

const FadeInSection = ({
  children,
  delay = 0,
  direction = "up",
  once = true,
}) => {
  const getInitial = () => {
    switch (direction) {
      case "down":
        return { opacity: 0, y: -20 };
      case "left":
        return { opacity: 0, x: 20 };
      case "right":
        return { opacity: 0, x: -20 };
      default:
        return { opacity: 0, y: 20 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeInOut" }}
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;

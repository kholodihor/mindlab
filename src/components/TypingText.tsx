import { motion } from 'framer-motion';
import { textContainer, textVariant } from '../utils/animations';

type TypingTextProps = {
  title: string;
};

const TypingText = ({ title }: TypingTextProps) => {
  return (
    <motion.p variants={textContainer}>
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TypingText;

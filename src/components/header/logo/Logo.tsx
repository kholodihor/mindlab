'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Logo.module.css';
import TypingText from '@/components/TypingText';
const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.logo}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <h1>ML</h1>
      ) : (
        <motion.div
          initial="hidden"
          whileHover="visible"
          viewport={{ amount: 0.1 }}
        >
          <h1 className={styles.title}>
            <TypingText title="MIND LAB" />
          </h1>
        </motion.div>
      )}
    </div>
  );
};

export default Logo;

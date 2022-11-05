'use client';
import { motion } from 'framer-motion';

export default function Motion() {
  return (
    <motion.div
      className="h-[100px] w-[100px] bg-blue-500"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}

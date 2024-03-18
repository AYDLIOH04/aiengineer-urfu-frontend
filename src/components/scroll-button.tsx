'use client';

import { useScrollOffset } from '@/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollButton = () => {
  const scrolled = useScrollOffset(80);
  const onScrollButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, scale: { duration: 0.2 } }}
          onClick={() => onScrollButtonClick()}
          className={`bg-accent text-secondary z-[101] cursor-pointer fixed right-7 bottom-10 rounded-full duration-200 ease-out p-3`}
        >
          <FaArrowUp className="text-background sm:text-[35px] text-[25px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

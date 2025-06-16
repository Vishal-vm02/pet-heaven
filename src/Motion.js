import { motion } from 'framer-motion';

function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: '#ffb347',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontWeight: 'bold',
      }}
    >
      Hello!
    </motion.div>
  );
}
export default AnimatedBox
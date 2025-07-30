import React from 'react';
import { motion } from 'framer-motion';

const tools = {
  'Programming Languages': ['Python', 'SQL', 'R', 'C', 'MATLAB', 'Bash'],
  'Data Tools': ['Pandas', 'NumPy', 'Spark', 'Hadoop', 'scikit-learn'],
  'Visualization': ['Tableau', 'PowerBI', 'Matplotlib', 'Seaborn', 'Excel'],
  'Machine Learning': ['TensorFlow', 'PyTorch', 'Keras', 'XGBoost', 'CNNs', 'RNNs', 'Transformers'],
  'DevOps & Cloud': ['Docker', 'Kubernetes', 'Terraform', 'MLflow', 'FastAPI', 'Azure', 'AWS', 'Snowflake', 'Git'],
  'Web Development': ['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'MongoDB', 'Express'],
};

const ToolsTechnologies = () => {
  return (
    <div className="pb-20">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 text-purple-300"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tools & Technologies
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {Object.entries(tools).map(([category, items], index) => (
          <motion.div
            key={category}
            className="bg-neutral-950 p-6 rounded-2xl shadow-md border border-purple-600 hover:shadow-purple-500 transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-purple-200 mb-4">{category}</h3>
            <ul className="flex flex-wrap gap-3 text-neutral-300 text-sm">
              {items.map((item) => (
                <li
                  key={item}
                  className="bg-purple-800/30 px-3 py-1 rounded-full border border-purple-600 hover:bg-purple-600/50 hover:text-white transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ToolsTechnologies;

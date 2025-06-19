import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Sentiment Analysis Engine',
    description:
      'A robust engine for analyzing sentiment from text data, leveraging NLP techniques and deep learning models. Provides real-time insights from customer reviews and social media.',
    techStack: ['Python', 'TensorFlow', 'Flask', 'Docker', 'NLP'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'abstract data',
    githubLink: 'https://github.com/yourusername/sentiment-analyzer',
    demoLink: '#',
  },
  {
    id: '2',
    title: 'Image Recognition Platform',
    description:
      'A platform that identifies objects and patterns in images using convolutional neural networks. Features a user-friendly interface for uploading and classifying images.',
    techStack: ['PyTorch', 'FastAPI', 'React', 'AWS S3', 'Computer Vision'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'technology circuit',
    githubLink: 'https://github.com/yourusername/image-recognition',
    demoLink: '#',
  },
  {
    id: '3',
    title: 'Recommendation System',
    description:
      'A collaborative filtering based recommendation system for e-commerce, suggesting products to users based on their past behavior and similar user preferences.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Django', 'PostgreSQL'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'network connection',
    githubLink: 'https://github.com/yourusername/recommendation-system',
    // demoLink: '#', // Example of no demo link
  },
  {
    id: '4',
    title: 'Predictive Maintenance AI',
    description:
      'An AI model that predicts equipment failures by analyzing sensor data. Helps in scheduling maintenance proactively, reducing downtime and operational costs.',
    techStack: ['Python', 'Keras', 'MQTT', 'InfluxDB', 'Grafana'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'industrial machinery',
    githubLink: 'https://github.com/yourusername/predictive-maintenance',
    demoLink: '#',
  },
];

import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'static-portfolio',
    title: 'Static Portfolio Website',
    description: 'Deploy a high-performance, globally distributed portfolio website using AWS edge services.',
    difficulty: 'Beginner',
    services: ['S3', 'CloudFront', 'Route 53'],
    learningObjectives: [
      'Hosting static assets in S3',
      'Configuring CloudFront for global distribution',
      'Setting up custom domains with Route 53',
      'Implementing SSL certificates with ACM'
    ],
    architecture: 'A React application built and uploaded to an S3 bucket configured for static hosting, served through a CloudFront distribution for low-latency delivery.',
    estimatedTime: '2-3 hours'
  },
  {
    id: 'serverless-contact',
    title: 'Serverless Contact Form',
    description: 'Build a fully functional contact form that sends emails without managing any servers.',
    difficulty: 'Beginner',
    services: ['Lambda', 'API Gateway', 'SES', 'IAM'],
    learningObjectives: [
      'Creating REST APIs with API Gateway',
      'Writing Node.js Lambda functions',
      'Configuring SES for email delivery',
      'Managing IAM roles and permissions'
    ],
    architecture: 'Frontend sends a POST request to API Gateway, which triggers a Lambda function. The Lambda function uses SES to send the email to the administrator.',
    estimatedTime: '3-4 hours'
  },
  {
    id: 'auth-dashboard',
    title: 'Secure Admin Dashboard',
    description: 'Implement robust user authentication and authorization for a private dashboard.',
    difficulty: 'Intermediate',
    services: ['Cognito', 'Amplify', 'IAM'],
    learningObjectives: [
      'Setting up Cognito User Pools and Identity Pools',
      'Implementing Sign-up, Sign-in, and MFA',
      'Using Amplify Auth library in React',
      'Protecting frontend routes based on auth state'
    ],
    architecture: 'React application using AWS Amplify to interact with Cognito for user management. JWT tokens are used to authorize requests to backend resources.',
    estimatedTime: '5-6 hours'
  },
  {
    id: 'image-analyzer',
    title: 'AI Image Analyzer',
    description: 'Create a gallery that automatically tags and describes uploaded images using AI.',
    difficulty: 'Intermediate',
    services: ['S3', 'Lambda', 'Rekognition', 'DynamoDB'],
    learningObjectives: [
      'S3 Event Triggers for Lambda',
      'Integrating with AWS Rekognition for AI analysis',
      'Storing metadata in DynamoDB',
      'Asynchronous processing patterns'
    ],
    architecture: 'User uploads image to S3. S3 triggers a Lambda function that sends the image to Rekognition. Results are stored in DynamoDB and displayed on the frontend.',
    estimatedTime: '6-8 hours'
  },
  {
    id: 'realtime-chat',
    title: 'Real-time Collaborative Chat',
    description: 'Build a serverless chat application with real-time updates and message history.',
    difficulty: 'Advanced',
    services: ['AppSync', 'DynamoDB', 'Cognito', 'Lambda'],
    learningObjectives: [
      'GraphQL schema design with AppSync',
      'Real-time subscriptions',
      'DynamoDB Resolver mapping templates',
      'Complex authorization rules'
    ],
    architecture: 'AWS AppSync provides a GraphQL interface with WebSockets for real-time updates. Data is persisted in DynamoDB, and Cognito handles user identity.',
    estimatedTime: '10-12 hours'
  }
];

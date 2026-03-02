export type AWSService = 
  | 'S3' 
  | 'CloudFront' 
  | 'Lambda' 
  | 'API Gateway' 
  | 'Cognito' 
  | 'DynamoDB' 
  | 'Amplify' 
  | 'AppSync' 
  | 'Rekognition' 
  | 'SES' 
  | 'Route 53' 
  | 'IAM';

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  services: AWSService[];
  learningObjectives: string[];
  architecture: string; // Description of architecture
  estimatedTime: string;
}

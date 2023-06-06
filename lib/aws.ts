export const AWS_SERVICES = [
    {
        name: "Elastic Compute (EC2)",
        description: "Virtual servers in the cloud. Easily launch and manage instances to handle varying workloads.",
        aliases: ["ec2"],
        usecases: "Hosting web applications, running backend scripts, running background jobs, etc.",
        tags: ["Compute", "Virtual Machine", "Scalability", "Virtual Server"],
    },
    {
        name: "Simple Storage Service (S3)",
        description: "Buckets for storing and retrieving data.",
        aliases: ["s3"],
        usecases: "Ideal for backups, data archiving, and content delivery.",
        tags: ["Storage", "Data", "Backup", "Content Delivery"],
    },
    {
        name: "CloudFront",
        description: "Global content delivery network for low-latency and high-performance delivery. Usually used with S3.",
        usecases: "Ideal for delivering static content, such as images, videos, and documents at a faster speed than using S3 alone.",
        tags: ["Content Delivery", "CDN", "Caching", "Scalability"],
    },
    {
        name: "Relational Database Service (RDS)",
        description: "Relational database service for various database engines. Simplify using your database by letting AWS handle the infrastructure.",
        aliases: ["Relational Database Service"],
        usecases: "Easy and quick way to get started with a production-ready database.",
        tags: ["Database", "Managed Service", "Relational", "Scalability"],
    },
    {
        name: "Lambda",
        description: "Run code without renting or managing servers. Effortlessly build scalable applications using event-driven compute resources.",
        usecases: "Ideal for building serverless applications, event-driven applications, and microservices.",
        tags: ["Compute", "Serverless", "Event-driven", "Scalability"],
    },
    {
        name: "Elastic Beanstalk",
        description: "Platform as a Service (PaaS) for deploying and managing applications.",
        usecases: "Ideal for deploying and managing applications without worrying about the underlying infrastructure. Like an easier EC2.",
        tags: ["Application Deployment", "PaaS", "Managed Service", "Scalability"],
    },
    {
        name: "Elastic Load Balancers",
        description: "Automatically distribute incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses.",
        aliases: ["ELB"],
        usecases: "Useful for scaling applications to multiple instances.",
        tags: ["Scalability", "High Availability", "Load Balancing", "Fault Tolerance"],
    },
    {
        name: "Elastic Container Service (ECS)",
        description: "Highly scalable, high-performance container orchestration service. Run Docker containers in a managed cluster of EC2 instances.",
        aliases: ["ECS"],
        usecases: "Ideal for running Docker containers in a managed cluster of EC2 instances.",
        tags: ["Container Orchestration", "Docker", "Scalability", "High Performance"],
    },
    {
        name: "Elastic Container Registry (ECR)",
        description: "Fully managed Docker container registry. Store, manage, and deploy Docker container images.",
        aliases: ["ECR"],
        usecases: "Useful for storing docker images. Usually used with ECS",
        tags: ["Container Registry", "Docker", "Managed Service", "Scalability"],
    },
    {
        name: "Virtual Private Cloud (VPC)",
        description:
            "Securely launch AWS resources in a virtual network. Isolate and control your cloud resources using customizable networking configurations.",
        aliases: ["VPC"],
        usecases: "Ideal for controlling and securing your AWS resources in a virtual network.",
        tags: ["Networking", "Security", "Isolation", "Connectivity"],
    },
    {
        name: "IAM",
        description: "Identity and access management for secure control of AWS resources. Manage user permissions and access policies with ease.",
        usecases: "Ideal for controlling access to your AWS resources.",
        tags: ["Security", "Identity", "Access Control", "Permissions"],
    },
    {
        name: "Simple Notification Service SNS",
        description: "Fully managed pub/sub messaging service for event notifications. Seamlessly send and receive messages across distributed systems.",
        aliases: ["SNS"],
        usecases: "Ideal for sending notifications, monitoring applications, and sending messages between microservices.",
        tags: ["Messaging", "Notifications", "Publish-Subscribe", "Event-driven"],
    },
    {
        name: "Simple Queue Service (SQS)",
        description: "Fully managed message queuing service for distributed systems. Decouple and scale microservices using reliable message queues.",
        aliases: ["SQS"],
        usecases: "Ideal for decoupling and scaling microservices, and reliably processing messages.",
        tags: ["Messaging", "Queues", "Distributed Systems", "Scalability"],
    },
    {
        name: "CloudWatch",
        description:
            "Monitoring and observability service for AWS resources and applications. Collect and analyze metrics, set alarms, and gain insights into system performance.",
        usecases: "Ideal for monitoring and gaining insights into your AWS resources and applications.",
        tags: ["Monitoring", "Observability", "Metrics", "Alarms"],
    },
    {
        name: "DynamoDB",
        description:
            "Fully managed NoSQL database for any scale of applications. Fast and reliable, perfect for handling large volumes of data with low latency.",
        usecases: "Alternative to traditional SQL databases. Good for non-relational data",
        tags: ["Database", "NoSQL", "Scalability", "High Performance"],
    },
];

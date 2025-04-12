export type AgentStatus = "active" | "idle" | "error" | "offline"

export type Agent = {
  id: string
  name: string
  role: string
  status: AgentStatus
  lastActive: string
  description: string
  capabilities: string[]
  memoryUsage: number
  cpuUsage: number
  version: string
}

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "TextAnalyzer",
    role: "Natural Language Processing",
    status: "active",
    lastActive: "2 minutes ago",
    description: "Analyzes and processes text data for sentiment, entities, and intent",
    capabilities: ["Sentiment Analysis", "Entity Recognition", "Intent Classification"],
    memoryUsage: 512,
    cpuUsage: 32,
    version: "1.2.0",
  },
  {
    id: "agent-2",
    name: "ImageProcessor",
    role: "Computer Vision",
    status: "active",
    lastActive: "5 minutes ago",
    description: "Processes and analyzes images for object detection and classification",
    capabilities: ["Object Detection", "Image Classification", "Face Recognition"],
    memoryUsage: 1024,
    cpuUsage: 45,
    version: "2.0.1",
  },
  {
    id: "agent-3",
    name: "DataCollector",
    role: "Data Acquisition",
    status: "idle",
    lastActive: "15 minutes ago",
    description: "Collects and preprocesses data from various sources",
    capabilities: ["Web Scraping", "API Integration", "Data Cleaning"],
    memoryUsage: 256,
    cpuUsage: 12,
    version: "1.1.5",
  },
  {
    id: "agent-4",
    name: "Baldr",
    role: "Conversational AI",
    status: "active",
    lastActive: "1 minute ago",
    description: "Handles natural language conversations and user queries",
    capabilities: ["Conversation Management", "Query Resolution", "Context Tracking"],
    memoryUsage: 768,
    cpuUsage: 38,
    version: "3.0.0",
  },
  {
    id: "agent-5",
    name: "Predictor",
    role: "Predictive Analytics",
    status: "active",
    lastActive: "8 minutes ago",
    description: "Makes predictions based on historical data and patterns",
    capabilities: ["Time Series Analysis", "Regression", "Classification"],
    memoryUsage: 896,
    cpuUsage: 42,
    version: "1.3.2",
  },
  {
    id: "agent-6",
    name: "DocumentParser",
    role: "Document Processing",
    status: "error",
    lastActive: "30 minutes ago",
    description: "Parses and extracts information from documents",
    capabilities: ["PDF Parsing", "OCR", "Information Extraction"],
    memoryUsage: 384,
    cpuUsage: 0,
    version: "2.1.0",
  },
  {
    id: "agent-7",
    name: "Orchestrator",
    role: "Workflow Management",
    status: "active",
    lastActive: "3 minutes ago",
    description: "Coordinates and manages workflows between agents",
    capabilities: ["Task Scheduling", "Resource Allocation", "Error Handling"],
    memoryUsage: 512,
    cpuUsage: 28,
    version: "1.0.4",
  },
  {
    id: "agent-8",
    name: "SecurityMonitor",
    role: "Security",
    status: "offline",
    lastActive: "2 hours ago",
    description: "Monitors and detects security threats and anomalies",
    capabilities: ["Threat Detection", "Anomaly Detection", "Access Control"],
    memoryUsage: 0,
    cpuUsage: 0,
    version: "1.5.0",
  },
]

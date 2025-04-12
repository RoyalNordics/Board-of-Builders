export type FlowStatus = "running" | "completed" | "failed" | "pending" | "paused"

export type FlowStage = {
  id: string
  name: string
  status: "completed" | "in-progress" | "pending" | "failed"
  agentId: string
  startTime?: string
  endTime?: string
}

export type Flow = {
  id: string
  name: string
  description: string
  status: FlowStatus
  progress: number
  startTime: string
  endTime?: string
  stages: FlowStage[]

  involvedAgents: string[]
  priority: "low" | "medium" | "high"
  tags: string[]
}

export const flows: Flow[] = [
  {
    id: "flow-1",
    name: "Document Analysis Pipeline",
    description: "Analyzes and extracts information from uploaded documents",
    status: "running",
    progress: 65,
    startTime: "2023-04-12 09:30:00",
    stages: [
      {
        id: "stage-1-1",
        name: "Document Parsing",
        status: "completed",
        agentId: "agent-6",
        startTime: "2023-04-12 09:30:00",
        endTime: "2023-04-12 09:32:15",
      },
      {
        id: "stage-1-2",
        name: "Text Extraction",
        status: "completed",
        agentId: "agent-1",
        startTime: "2023-04-12 09:32:20",
        endTime: "2023-04-12 09:35:45",
      },
      {
        id: "stage-1-3",
        name: "Entity Recognition",
        status: "in-progress",
        agentId: "agent-1",
        startTime: "2023-04-12 09:36:00",
      },
      {
        id: "stage-1-4",
        name: "Data Aggregation",
        status: "pending",
        agentId: "agent-3",
      },
    ],
    involvedAgents: ["agent-1", "agent-3", "agent-6"],
    priority: "high",
    tags: ["document", "analysis", "extraction"],
  },
  {
    id: "flow-2",
    name: "Image Recognition Workflow",
    description: "Processes and analyzes images for object detection",
    status: "completed",
    progress: 100,
    startTime: "2023-04-12 08:15:00",
    endTime: "2023-04-12 08:25:30",
    stages: [
      {
        id: "stage-2-1",
        name: "Image Preprocessing",
        status: "completed",
        agentId: "agent-2",
        startTime: "2023-04-12 08:15:00",
        endTime: "2023-04-12 08:17:30",
      },
      {
        id: "stage-2-2",
        name: "Object Detection",
        status: "completed",
        agentId: "agent-2",
        startTime: "2023-04-12 08:17:35",
        endTime: "2023-04-12 08:22:10",
      },
      {
        id: "stage-2-3",
        name: "Result Compilation",
        status: "completed",
        agentId: "agent-7",
        startTime: "2023-04-12 08:22:15",
        endTime: "2023-04-12 08:25:30",
      },
    ],
    involvedAgents: ["agent-2", "agent-7"],
    priority: "medium",
    tags: ["image", "recognition", "detection"],
  },
  {
    id: "flow-3",
    name: "Predictive Maintenance",
    description: "Analyzes sensor data to predict maintenance needs",
    status: "running",
    progress: 45,
    startTime: "2023-04-12 10:00:00",
    stages: [
      {
        id: "stage-3-1",
        name: "Data Collection",
        status: "completed",
        agentId: "agent-3",
        startTime: "2023-04-12 10:00:00",
        endTime: "2023-04-12 10:05:20",
      },
      {
        id: "stage-3-2",
        name: "Data Preprocessing",
        status: "completed",
        agentId: "agent-3",
        startTime: "2023-04-12 10:05:25",
        endTime: "2023-04-12 10:08:40",
      },
      {
        id: "stage-3-3",
        name: "Predictive Analysis",
        status: "in-progress",
        agentId: "agent-5",
        startTime: "2023-04-12 10:08:45",
      },
      {
        id: "stage-3-4",
        name: "Report Generation",
        status: "pending",
        agentId: "agent-7",
      },
    ],
    involvedAgents: ["agent-3", "agent-5", "agent-7"],
    priority: "medium",
    tags: ["predictive", "maintenance", "analysis"],
  },
  {
    id: "flow-4",
    name: "Customer Support Automation",
    description: "Automates responses to customer inquiries",
    status: "paused",
    progress: 30,
    startTime: "2023-04-12 09:00:00",
    stages: [
      {
        id: "stage-4-1",
        name: "Query Analysis",
        status: "completed",
        agentId: "agent-1",
        startTime: "2023-04-12 09:00:00",
        endTime: "2023-04-12 09:03:15",
      },
      {
        id: "stage-4-2",
        name: "Intent Classification",
        status: "completed",
        agentId: "agent-1",
        startTime: "2023-04-12 09:03:20",
        endTime: "2023-04-12 09:06:45",
      },
      {
        id: "stage-4-3",
        name: "Response Generation",
        status: "in-progress",
        agentId: "agent-4",
        startTime: "2023-04-12 09:06:50",
      },
    ],
    involvedAgents: ["agent-1", "agent-4"],
    priority: "low",
    tags: ["customer", "support", "automation"],
  },
  {
    id: "flow-5",
    name: "Security Threat Analysis",
    description: "Analyzes system logs for security threats",
    status: "failed",
    progress: 60,
    startTime: "2023-04-12 07:30:00",
    endTime: "2023-04-12 07:45:10",
    stages: [
      {
        id: "stage-5-1",
        name: "Log Collection",
        status: "completed",
        agentId: "agent-3",
        startTime: "2023-04-12 07:30:00",
        endTime: "2023-04-12 07:33:20",
      },
      {
        id: "stage-5-2",
        name: "Pattern Analysis",
        status: "completed",
        agentId: "agent-5",
        startTime: "2023-04-12 07:33:25",
        endTime: "2023-04-12 07:38:50",
      },
      {
        id: "stage-5-3",
        name: "Threat Detection",
        status: "failed",
        agentId: "agent-8",
        startTime: "2023-04-12 07:38:55",
        endTime: "2023-04-12 07:45:10",
      },
    ],
    involvedAgents: ["agent-3", "agent-5", "agent-8"],
    priority: "high",
    tags: ["security", "threat", "analysis"],
  },
]

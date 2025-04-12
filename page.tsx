"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { agents } from "@/app/data/agents"
import { Bot, GitBranch, Plus, Save, Play, ArrowRight } from "lucide-react"

// This is a placeholder component for the flow builder
// In a real implementation, this would be a more complex component
// with drag and drop functionality, node connections, etc.

export default function FlowBuilderPage() {
  const [selectedTab, setSelectedTab] = useState("visual")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Flow Builder</h2>
          <p className="text-muted-foreground">Create and edit AI agent workflows</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button>
            <Play className="mr-2 h-4 w-4" />
            Run Flow
          </Button>
        </div>
      </div>

      <Tabs defaultValue="visual" onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="visual">Visual Editor</TabsTrigger>
          <TabsTrigger value="json">JSON Editor</TabsTrigger>
        </TabsList>

        <TabsContent value="visual" className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Agents</CardTitle>
                  <CardDescription>Drag agents to the canvas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {agents.map((agent) => (
                      <div
                        key={agent.id}
                        className="flex items-center space-x-2 rounded-md border p-2 cursor-grab"
                        draggable
                      >
                        <div className="rounded-full bg-primary/10 p-1">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                        <div className="text-sm font-medium">{agent.name}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Flow Controls</CardTitle>
                  <CardDescription>Add control elements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["Start", "End", "Decision", "Fork", "Join", "Delay"].map((control) => (
                      <div
                        key={control}
                        className="flex items-center space-x-2 rounded-md border p-2 cursor-grab"
                        draggable
                      >
                        <div className="rounded-full bg-secondary p-1">
                          <GitBranch className="h-4 w-4" />
                        </div>
                        <div className="text-sm font-medium">{control}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="col-span-3">
              <Card className="h-[calc(100vh-16rem)]">
                <CardHeader>
                  <CardTitle>Flow Canvas</CardTitle>
                  <CardDescription>Design your agent workflow</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed p-8">
                    <div className="text-center">
                      <GitBranch className="mx-auto h-12 w-12 text-muted-foreground/50" />
                      <h3 className="mt-4 text-lg font-semibold">Start building your flow</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Drag agents and controls from the sidebar to create a workflow
                      </p>
                      <Button className="mt-4">
                        <Plus className="mr-2 h-4 w-4" />
                        Add First Node
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="json" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Flow JSON</CardTitle>
              <CardDescription>Edit the flow configuration directly</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="rounded-lg bg-muted p-4 overflow-auto h-[calc(100vh-20rem)]">
                {`{
  "id": "new-flow",
  "name": "New Flow",
  "description": "A new flow created in the Flow Builder",
  "nodes": [
    {
      "id": "start",
      "type": "start",
      "position": { "x": 100, "y": 100 },
      "data": { "label": "Start" },
      "connections": ["agent-1"]
    },
    {
      "id": "agent-1",
      "type": "agent",
      "position": { "x": 300, "y": 100 },
      "data": { 
        "agentId": "agent-4",
        "label": "Baldr",
        "config": {
          "timeout": 30000,
          "retries": 3
        }
      },
      "connections": ["decision-1"]
    },
    {
      "id": "decision-1",
      "type": "decision",
      "position": { "x": 500, "y": 100 },
      "data": { 
        "label": "Check Result",
        "condition": "result.confidence > 0.8"
      },
      "connections": {
        "true": "agent-2",
        "false": "agent-3"
      }
    },
    {
      "id": "agent-2",
      "type": "agent",
      "position": { "x": 700, "y": 50 },
      "data": { 
        "agentId": "agent-1",
        "label": "TextAnalyzer",
        "config": {
          "mode": "detailed"
        }
      },
      "connections": ["end"]
    },
    {
      "id": "agent-3",
      "type": "agent",
      "position": { "x": 700, "y": 150 },
      "data": { 
        "agentId": "agent-5",
        "label": "Predictor",
        "config": {
          "model": "basic"
        }
      },
      "connections": ["end"]
    },
    {
      "id": "end",
      "type": "end",
      "position": { "x": 900, "y": 100 },
      "data": { "label": "End" },
      "connections": []
    }
  ]
}`}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {selectedTab === "visual" && (
        <div className="fixed bottom-6 right-6 flex items-center space-x-2 rounded-lg bg-card p-4 shadow-lg border">
          <div className="text-sm font-medium">Flow Preview:</div>
          <div className="flex items-center space-x-2">
            <div className="rounded-md border bg-primary/10 p-2 text-xs">Start</div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="rounded-md border bg-primary/10 p-2 text-xs">Baldr</div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="rounded-md border bg-primary/10 p-2 text-xs">Decision</div>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <div className="rounded-md border bg-primary/10 p-2 text-xs">End</div>
          </div>
        </div>
      )}
    </div>
  )
}

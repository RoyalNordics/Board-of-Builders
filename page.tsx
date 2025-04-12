"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, X, Check, AlertCircle, File } from "lucide-react"

type UploadedFile = {
  id: string
  name: string
  size: string
  type: string
  status: "uploading" | "complete" | "error"
  progress: number
}

export default function FileUploadPage() {
  const [files, setFiles] = useState<UploadedFile[]>([
    {
      id: "1",
      name: "training-data.json",
      size: "2.4 MB",
      type: "application/json",
      status: "complete",
      progress: 100,
    },
    {
      id: "2",
      name: "agent-config.yaml",
      size: "156 KB",
      type: "application/yaml",
      status: "complete",
      progress: 100,
    },
    {
      id: "3",
      name: "dataset.csv",
      size: "4.7 MB",
      type: "text/csv",
      status: "error",
      progress: 65,
    },
  ])

  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      // Handle the files
      console.log("Files dropped:", e.dataTransfer.files)
      // You would normally upload these files to your server

      // For demo purposes, add a fake file to the list
      const newFile: UploadedFile = {
        id: Date.now().toString(),
        name: e.dataTransfer.files[0].name,
        size: `${(e.dataTransfer.files[0].size / (1024 * 1024)).toFixed(1)} MB`,
        type: e.dataTransfer.files[0].type,
        status: "uploading",
        progress: 0,
      }

      setFiles((prev) => [...prev, newFile])

      // Simulate upload progress
      let progress = 0
      const interval = setInterval(() => {
        progress += 10
        if (progress <= 100) {
          setFiles((prev) => prev.map((file) => (file.id === newFile.id ? { ...file, progress } : file)))
        } else {
          clearInterval(interval)
          setFiles((prev) =>
            prev.map((file) => (file.id === newFile.id ? { ...file, status: "complete", progress: 100 } : file)),
          )
        }
      }, 300)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Handle the files
      console.log("Files selected:", e.target.files)
      // You would normally upload these files to your server

      // For demo purposes, add a fake file to the list
      const newFile: UploadedFile = {
        id: Date.now().toString(),
        name: e.target.files[0].name,
        size: `${(e.target.files[0].size / (1024 * 1024)).toFixed(1)} MB`,
        type: e.target.files[0].type,
        status: "uploading",
        progress: 0,
      }

      setFiles((prev) => [...prev, newFile])

      // Simulate upload progress
      let progress = 0
      const interval = setInterval(() => {
        progress += 10
        if (progress <= 100) {
          setFiles((prev) => prev.map((file) => (file.id === newFile.id ? { ...file, progress } : file)))
        } else {
          clearInterval(interval)
          setFiles((prev) =>
            prev.map((file) => (file.id === newFile.id ? { ...file, status: "complete", progress: 100 } : file)),
          )
        }
      }, 300)
    }
  }

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">File Upload</h2>
        <p className="text-muted-foreground">Upload documents and files for agents to process</p>
      </div>

      <Tabs defaultValue="upload">
        <TabsList>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Files</CardTitle>
              <CardDescription>
                Upload documents, datasets, or configuration files for AI agents to process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center ${
                  dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
                }`}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="rounded-full bg-muted p-4">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Drag & drop files</h3>
                    <p className="text-sm text-muted-foreground">or click to browse files on your computer</p>
                  </div>
                  <Label htmlFor="file-upload" className="cursor-pointer">
                    <div className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                      Browse Files
                    </div>
                    <Input id="file-upload" type="file" className="sr-only" onChange={handleFileChange} multiple />
                  </Label>
                  <div className="text-xs text-muted-foreground">Supported formats: PDF, TXT, CSV, JSON, YAML, XML</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Uploaded Files</CardTitle>
              <CardDescription>Manage files that have been uploaded to the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {files.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <FileText className="h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-semibold">No files uploaded</h3>
                    <p className="text-sm text-muted-foreground">Upload files to see them here</p>
                  </div>
                ) : (
                  files.map((file) => (
                    <div key={file.id} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-md bg-muted p-2">
                          <File className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>{file.size}</span>
                            <span>•</span>
                            <span>{file.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {file.status === "uploading" ? (
                          <div className="w-32">
                            <div className="flex justify-between text-xs">
                              <span>Uploading...</span>
                              <span>{file.progress}%</span>
                            </div>
                            <div className="mt-1 h-1.5 w-full rounded-full bg-secondary">
                              <div
                                className="h-1.5 rounded-full bg-primary"
                                style={{ width: `${file.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        ) : file.status === "complete" ? (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                            <Check className="mr-1 h-3 w-3" /> Complete
                          </Badge>
                        ) : (
                          <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
                            <AlertCircle className="mr-1 h-3 w-3" /> Error
                          </Badge>
                        )}
                        <Button variant="ghost" size="icon" onClick={() => removeFile(file.id)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Process Files
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

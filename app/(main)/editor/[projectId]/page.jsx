"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Loader2 } from "lucide-react";

import { api } from "../../../../convex/_generated/api";
import { useConvexQuery } from "../../../../hooks/use-convex-query";
import { CanvasContext } from "../../../../context/context";

import CanvasEditor from "./_component/canvas";

export default function EditorPage() {
  const params = useParams();
  const projectId = params.projectId;

  const [canvasEditor, setCanvasEditor] = useState(null);
  const [activeTool, setActiveTool] = useState("select");
  const [processingMessage, setProcessingMessage] = useState(null);

  const {
    data: project,
    isLoading,
    error,
  } = useConvexQuery(api.projects.getProject, {
    projectId,
  });

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-slate-900">
        <Loader2 className="h-8 w-8 animate-spin text-white" />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-slate-900 text-white">
        Project Not Found
      </div>
    );
  }

  return (
    <CanvasContext.Provider
      value={{
        canvasEditor,
        setCanvasEditor,
        activeTool,
        onToolChange: setActiveTool,
        processingMessage,
        setProcessingMessage,
      }}
    >
      <div className="h-screen w-screen bg-slate-900 overflow-hidden">
        <CanvasEditor project={project} />
      </div>
    </CanvasContext.Provider>
  );
}
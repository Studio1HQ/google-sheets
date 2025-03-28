/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useRef, useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";
import Header from "@/app/features/header";

import { Cell } from "@/lib/sheetData";

export default function SpreadsheetPage({
  id,
  initialData,
  initialTitle,
}: {
  id: string;
  initialData: Record<string, Cell>[];
  initialTitle: string;
}) {
  const searchParams = useSearchParams();
  const urlTitle = searchParams.get("title");

  const measureRef = useRef<HTMLSpanElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const [filename, setFilename] = useState(initialTitle);

  useEffect(() => {
    if (urlTitle) {
      setFilename(urlTitle);
    }
  }, [urlTitle, setFilename]);

  const handleTitleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-white text-xs">
      <Header
        type="sheets"
        measureRef={measureRef}
        filename={urlTitle || filename}
        inputRef={inputRef}
        setFilename={setFilename}
        handleTitleFocus={handleTitleFocus}
      />
      <p>Document {id}</p>
      <p>Table Here</p>
      <p>{JSON.stringify(initialData)}</p>
    </div>
  );
}

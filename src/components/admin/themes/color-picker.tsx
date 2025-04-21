
"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"

interface ColorPickerProps {
  id: string
  value: string
  onChange: (value: string) => void
}

export function ColorPicker({ id, value, onChange }: ColorPickerProps) {
  const [color, setColor] = useState(value)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setColor(value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setColor(newColor)
    onChange(newColor)
  }

  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="w-10 h-10 rounded-md border border-input"
            style={{ backgroundColor: color }}
            aria-label="Pick a color"
          />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-3">
          <div className="space-y-2">
            <input
              ref={inputRef}
              type="color"
              value={color}
              onChange={handleChange}
              className="w-32 h-32 cursor-pointer"
            />
          </div>
        </PopoverContent>
      </Popover>
      <Input id={id} value={color} onChange={handleChange} className="font-mono" placeholder="#000000" />
    </div>
  )
}

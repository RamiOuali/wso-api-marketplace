"use client"

import { useState, useEffect, useRef } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

interface ColorPickerProps {
  id: string
  value: string
  onChange: (value: string) => void
  presetColors?: string[]
  label?: string
}

// Convert hex to RGB
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

// Convert RGB to hex
const rgbToHex = (r: number, g: number, b: number): string => {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`
}

export function ColorPicker({ 
  id, 
  value, 
  onChange, 
  presetColors = ["#1e293b", "#0f172a", "#6366f1", "#3b82f6", "#14b8a6", "#22c55e", "#ef4444", "#f59e0b", "#f97316", "#ec4899", "#8b5cf6", "#ffffff", "#000000"],
  label
}: ColorPickerProps) {
  const [color, setColor] = useState(value || "#ffffff")
  const [copied, setCopied] = useState(false)
  const [rgb, setRgb] = useState<{ r: number; g: number; b: number }>({ r: 255, g: 255, b: 255 })
  const inputRef = useRef<HTMLInputElement>(null)

  // Update RGB state when color changes
  useEffect(() => {
    const rgbValue = hexToRgb(color)
    if (rgbValue) setRgb(rgbValue)
  }, [color])

  // Update color when value prop changes
  useEffect(() => {
    if (value) setColor(value)
  }, [value])

  const handleChange = (newColor: string) => {
    setColor(newColor)
    onChange(newColor)
  }

  const handleRgbChange = (key: 'r' | 'g' | 'b', val: number) => {
    const newRgb = { ...rgb, [key]: val }
    setRgb(newRgb)
    const newHex = rgbToHex(newRgb.r, newRgb.g, newRgb.b)
    handleChange(newHex)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-2">
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="w-10 h-9 rounded-sm shadow-sm transition-all hover:scale-105"
              style={{ backgroundColor: color || "#ffffff" }}
              aria-label="Pick a color"
            />
          </PopoverTrigger>
          <PopoverContent className="w-64 p-4">
            <Tabs defaultValue="picker">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="picker">Picker</TabsTrigger>
                <TabsTrigger value="rgb">RGB</TabsTrigger>
                <TabsTrigger value="presets">Presets</TabsTrigger>
              </TabsList>

              <TabsContent value="picker" className="space-y-4">
                <input
                  ref={inputRef}
                  type="color"
                  value={color || "#ffffff"}
                  onChange={(e) => handleChange(e.target.value)}
                  className="w-full h-32 rounded-md cursor-pointer"
                />
              </TabsContent>

              <TabsContent value="rgb" className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <Label htmlFor="r-slider">R: {rgb.r}</Label>
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: `rgb(${rgb.r}, 0, 0)` }} />
                    </div>
                    <Slider
                      id="r-slider"
                      min={0}
                      max={255}
                      step={1}
                      value={[rgb.r]}
                      onValueChange={(value) => handleRgbChange('r', value[0])}
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <Label htmlFor="g-slider">G: {rgb.g}</Label>
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: `rgb(0, ${rgb.g}, 0)` }} />
                    </div>
                    <Slider
                      id="g-slider"
                      min={0}
                      max={255}
                      step={1}
                      value={[rgb.g]}
                      onValueChange={(value) => handleRgbChange('g', value[0])}
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <Label htmlFor="b-slider">B: {rgb.b}</Label>
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: `rgb(0, 0, ${rgb.b})` }} />
                    </div>
                    <Slider
                      id="b-slider"
                      min={0}
                      max={255}
                      step={1}
                      value={[rgb.b]}
                      onValueChange={(value) => handleRgbChange('b', value[0])}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="presets">
                <div className="grid grid-cols-5 gap-2">
                  {presetColors.map((presetColor) => (
                    <button
                      key={presetColor}
                      className="w-8 h-8 rounded-md border border-input shadow-sm transition-all hover:scale-110"
                      style={{ backgroundColor: presetColor }}
                      onClick={() => handleChange(presetColor)}
                      aria-label={`Select color ${presetColor}`}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex items-center justify-between mt-4 pt-2 border-t">
              <div 
                className="w-8 h-8 rounded-md border border-input" 
                style={{ backgroundColor: color }}
              />
              <div className="font-mono text-sm">{color}</div>
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={copyToClipboard}
                className="h-8 w-8"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Input 
          id={id} 
          value={color} 
          onChange={(e) => handleChange(e.target.value)} 
          className="font-mono" 
          placeholder="#000000" 
        />
      </div>
    </div>
  )
}

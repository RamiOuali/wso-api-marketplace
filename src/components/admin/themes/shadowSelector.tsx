import { useState, useEffect, useMemo } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"

interface CardShadowSelectorProps {
  id: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  fontFamily?: string
  textColor?: string
  inputBackground?: string
  inputBorderColor?: string
  inputTextColor?: string
  inputBorderRadius?: string
  cardBackground?: string
  cardBorderColor?: string
  cardBorderRadius?: string
}

// Default shadow presets
const shadowPresets = {
  none: "0 0 0 0 rgba(0,0,0,0)",
  subtle: "0 1px 2px 0 rgba(0,0,0,0.1)",
  medium: "0 2px 4px 0 rgba(0,0,0,0.1)",
  pronounced: "0 4px 8px 0 rgba(0,0,0,0.15)",
}

export function CardShadowSelector({
  id,
  name,
  value,
  onChange,
  fontFamily = "Inter, sans-serif",
  textColor = "#333333",
  inputBackground = "#ffffff",
  inputBorderColor = "#d1d5db",
  inputTextColor = "#333333",
  inputBorderRadius = "0.375rem",
  cardBackground = "#ffffff",
  cardBorderColor = "#e5e7eb",
  cardBorderRadius = "0.5rem",
}: CardShadowSelectorProps) {
  // Parse shadow value with fallback
  const parseShadow = (shadow: string) => {
    if (!shadow || shadow === "none") return { x: 0, y: 0, blur: 0, spread: 0, opacity: 0, color: "0,0,0" }
    const regex = /(-?\d+)px (-?\d+)px (\d+)px (-?\d+)px rgba\((\d+,\d+,\d+),(\d*\.?\d*)\)/
    const match = shadow.match(regex)
    if (match) {
      return {
        x: parseInt(match[1]),
        y: parseInt(match[2]),
        blur: parseInt(match[3]),
        spread: parseInt(match[4]),
        color: match[5],
        opacity: parseFloat(match[6]) || 0,
      }
    }
    return { x: 0, y: 2, blur: 4, spread: 0, opacity: 0.1, color: "0,0,0" }
  }

  const [shadow, setShadow] = useState(parseShadow(value))

  // Sync shadow state when value prop changes
  useEffect(() => {
    const parsed = parseShadow(value)
    setShadow((prev) => {
      if (
        prev.x === parsed.x &&
        prev.y === parsed.y &&
        prev.blur === parsed.blur &&
        prev.spread === parsed.spread &&
        prev.opacity === parsed.opacity &&
        prev.color === parsed.color
      ) {
        return prev
      }
      return parsed
    })
  }, [value])

  // Memoize shadow string to prevent unnecessary updates
  const shadowString = useMemo(
    () => `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px rgba(${shadow.color},${shadow.opacity})`,
    [shadow]
  )

  // Update parent form only when shadow string changes and differs from value
  useEffect(() => {
    if (shadowString !== value) {
      onChange({ target: { name, value: shadowString } } as React.ChangeEvent<HTMLInputElement>)
    }
  }, [shadowString, value, name, onChange])

  // Handle preset selection
  const handlePresetChange = (preset: string) => {
    setShadow(parseShadow(shadowPresets[preset as keyof typeof shadowPresets]))
  }

  // Update individual shadow properties
  const updateShadow = (key: keyof typeof shadow, value: number | string) => {
    setShadow((prev) => ({ ...prev, [key]: value }))
  }

  // Determine current preset for controlled Select
  const currentPreset = useMemo(() => {
    const currentShadowString = `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px rgba(${shadow.color},${shadow.opacity})`
    return Object.keys(shadowPresets).find(
      (key) => shadowPresets[key as keyof typeof shadowPresets] === currentShadowString
    ) || "custom"
  }, [shadow])

  return (
    <div className="space-y-4" style={{ fontFamily }}>
      <Label htmlFor={id} className="text-sm font-medium" style={{ color: textColor }}>
        Card Shadow
      </Label>

      {/* Preset Selector */}
      <Select value={currentPreset} onValueChange={handlePresetChange}>
        <SelectTrigger
          className="w-full"
          style={{
            backgroundColor: inputBackground,
            borderColor: inputBorderColor,
            color: inputTextColor,
            borderRadius: inputBorderRadius,
          }}
        >
          <SelectValue placeholder="Select shadow preset" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">None</SelectItem>
          <SelectItem value="subtle">Subtle</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="pronounced">Pronounced</SelectItem>
          <SelectItem value="custom">Custom</SelectItem>
        </SelectContent>
      </Select>

      {/* Shadow Controls */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* X Offset */}
        <div className="space-y-2">
          <Label className="text-xs" style={{ color: textColor }}>
            X Offset (px)
          </Label>
          <Slider
            value={[shadow.x]}
            onValueChange={(value) => updateShadow("x", value[0])}
            min={-20}
            max={20}
            step={1}
            className="w-full"
          />
          <Input
            type="number"
            value={shadow.x}
            onChange={(e) => updateShadow("x", parseInt(e.target.value) || 0)}
            className="mt-2"
            style={{
              backgroundColor: inputBackground,
              borderColor: inputBorderColor,
              color: inputTextColor,
              borderRadius: inputBorderRadius,
            }}
          />
        </div>

        {/* Y Offset */}
        <div className="space-y-2">
          <Label className="text-xs" style={{ color: textColor }}>
            Y Offset (px)
          </Label>
          <Slider
            value={[shadow.y]}
            onValueChange={(value) => updateShadow("y", value[0])}
            min={-20}
            max={20}
            step={1}
            className="w-full"
          />
          <Input
            type="number"
            value={shadow.y}
            onChange={(e) => updateShadow("y", parseInt(e.target.value) || 0)}
            className="mt-2"
            style={{
              backgroundColor: inputBackground,
              borderColor: inputBorderColor,
              color: inputTextColor,
              borderRadius: inputBorderRadius,
            }}
          />
        </div>

        {/* Blur Radius */}
        <div className="space-y-2">
          <Label className="text-xs" style={{ color: textColor }}>
            Blur Radius (px)
          </Label>
          <Slider
            value={[shadow.blur]}
            onValueChange={(value) => updateShadow("blur", value[0])}
            min={0}
            max={50}
            step={1}
            className="w-full"
          />
          <Input
            type="number"
            value={shadow.blur}
            onChange={(e) => updateShadow("blur", parseInt(e.target.value) || 0)}
            className="mt-2"
            style={{
              backgroundColor: inputBackground,
              borderColor: inputBorderColor,
              color: inputTextColor,
              borderRadius: inputBorderRadius,
            }}
          />
        </div>

        {/* Spread Radius */}
        <div className="space-y-2">
          <Label className="text-xs" style={{ color: textColor }}>
            Spread Radius (px)
          </Label>
          <Slider
            value={[shadow.spread]}
            onValueChange={(value) => updateShadow("spread", value[0])}
            min={-10}
            max={10}
            step={1}
            className="w-full"
          />
          <Input
            type="number"
            value={shadow.spread}
            onChange={(e) => updateShadow("spread", parseInt(e.target.value) || 0)}
            className="mt-2"
            style={{
              backgroundColor: inputBackground,
              borderColor: inputBorderColor,
              color: inputTextColor,
              borderRadius: inputBorderRadius,
            }}
          />
        </div>

        {/* Opacity */}
        <div className="space-y-2">
          <Label className="text-xs" style={{ color: textColor }}>
            Opacity
          </Label>
          <Slider
            value={[shadow.opacity * 100]}
            onValueChange={(value) => updateShadow("opacity", value[0] / 100)}
            min={0}
            max={100}
            step={1}
            className="w-full"
          />
          <Input
            type="number"
            value={Math.round(shadow.opacity * 100)}
            onChange={(e) => updateShadow("opacity", parseInt(e.target.value) / 100 || 0)}
            className="mt-2"
            style={{
              backgroundColor: inputBackground,
              borderColor: inputBorderColor,
              color: inputTextColor,
              borderRadius: inputBorderRadius,
            }}
          />
        </div>

        {/* Color */}
        <div className="space-y-2">
          <Label className="text-xs" style={{ color: textColor }}>
            Shadow Color (RGB)
          </Label>
          <Input
            type="text"
            value={shadow.color}
            onChange={(e) => updateShadow("color", e.target.value)}
            placeholder="0,0,0"
            className="mt-2"
            style={{
              backgroundColor: inputBackground,
              borderColor: inputBorderColor,
              color: inputTextColor,
              borderRadius: inputBorderRadius,
            }}
          />
        </div>
      </div>

      {/* Preview */}
      <div className="mt-6">
        <Label className="text-xs mb-2 block" style={{ color: textColor }}>
          Preview
        </Label>
        <div
          className="p-6 rounded-lg"
          style={{
            backgroundColor: cardBackground,
            borderRadius: cardBorderRadius,
            border: `1px solid ${cardBorderColor}`,
            boxShadow: shadowString,
          }}
        >
          <div class memoizedShadowString="h-20 w-full bg-gray-100/50 rounded" />
        </div>
      </div>

      {/* Generated Shadow String */}
      <div className="space-y-2">
        <Label className="text-xs" style={{ color: textColor }}>
          Generated Shadow
        </Label>
        <Input
          value={shadowString}
          readOnly
          className="bg-gray-100/50"
          style={{
            backgroundColor: `${inputBackground}50`,
            borderColor: inputBorderColor,
            color: inputTextColor,
            borderRadius: inputBorderRadius,
          }}
        />
      </div>
    </div>
  )
}

import { ThemeEditor } from "@/components/admin/themes/theme-editor";


export default function ThemeEditorPage({ params }: { params: { id: string } }) {
  return <ThemeEditor themeId={params.id} />
}

'use client'

export default function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="rounded bg-blue-700 px-3 py-1 text-white hover:bg-blue-600">
      Download / Print PDF
    </button>
  )
}

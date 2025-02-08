import React, { useState } from 'react'

export const ArtworkUploader = () => {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  const handleUpload = async () => {
    if (!file) return
    // Add your upload logic here
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        disabled={!file}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Upload Artwork
      </button>
    </div>
  )
}

export default ArtworkUploader 
import React, { useState } from 'react';
import { UploadCloud, FilePlus, PlusCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const CustomWorkspace = () => {
  // State to manage uploaded file and progress
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Mocked list of previous cases
  const [cases, setCases] = useState([
    { id: 1, name: 'Case #1234', description: 'Forensic image of suspect device', date: '2024-08-01' },
    { id: 2, name: 'Case #5678', description: 'Disk image of external storage', date: '2024-07-15' },
  ]);

  // Handles file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadProgress(0); // Reset progress when a new file is selected
  };

  // Simulate file upload progress
  const handleUpload = () => {
    if (!file) return;
    setIsUploading(true);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        // After upload, add the new case to the list
        setCases([...cases, { id: cases.length + 1, name: file.name, description: 'New Case', date: new Date().toLocaleDateString() }]);
        setFile(null); // Reset the file input after upload
      }
    }, 300);
  };

  return (
    <>
      <Navbar /> {/* Reuse the Navbar */}

      <div className="min-h-screen bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <h1 className="text-4xl font-bold mb-6">Custom Workspace</h1>
          
          {/* Previous Cases Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Previous Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cases.map((caseItem) => (
                <div key={caseItem.id} className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-medium">{caseItem.name}</h3>
                  <p className="text-gray-400">{caseItem.description}</p>
                  <p className="text-gray-500 mt-2 text-sm">Uploaded: {caseItem.date}</p>
                </div>
              ))}
            </div>
          </section>

          {/* New Case Upload Section */}
          <section className="fixed bottom-8 right-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">New Case Upload</h2>

              {/* File Input */}
              <label className="cursor-pointer inline-block mb-4">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg inline-block transition-colors text-center">
                  <FilePlus className="w-6 h-6 inline-block mb-2" />
                  <span>{file ? file.name : "Choose a file"}</span>
                </div>
              </label>

              {/* Upload Button */}
              <button
                onClick={handleUpload}
                disabled={!file || isUploading}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? 'Uploading...' : 'Start Upload'}
                <UploadCloud className="w-5 h-5 inline-block ml-2" />
              </button>

              {/* Progress Bar */}
              {isUploading && (
                <div className="w-full bg-gray-600 rounded-full h-2 mt-4">
                  <div
                    className="bg-blue-500 h-full text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  >
                    {uploadProgress}%
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CustomWorkspace;

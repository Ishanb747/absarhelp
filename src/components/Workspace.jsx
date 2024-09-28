import React, { useState } from 'react';
import { UploadCloud, FilePlus, PlusCircle } from 'lucide-react';
import Navbar from './Navbar';  // Importing the Navbar component

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadProgress(0); // Reset progress when a new file is selected
  };

  const handleUpload = () => {
    if (!file) return;
    setIsUploading(true);

    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
      }
    }, 300);
  };

  return (
    <>
      <Navbar /> {/* Navbar is included here */}

      <div className="min-h-screen bg-black text-white">
        {/* Dashboard Header */}
        <section className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold text-center">Workspace Dashboard</h1>
          <p className="text-center text-lg mt-4">Manage your forensic evidence uploads and analysis.</p>
        </section>

        {/* Upload Section */}
        <section className="container mx-auto px-4 py-10 flex flex-col items-center">
          <div className="bg-white text-black p-8 rounded-lg w-full max-w-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Add Evidence or Disk Image</h2>
            <p className="text-gray-600 mb-6">Upload forensic images for analysis. This is a simulated workspace.</p>

            {/* File Input */}
            <div className="mb-6">
              <label className="cursor-pointer inline-block">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="bg-black hover:bg-gray-900 text-white p-4 rounded-lg inline-block transition-colors">
                  <FilePlus className="w-6 h-6 inline-block mr-2" />
                  <span>{file ? file.name : "Choose a file"}</span>
                </div>
              </label>
            </div>

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              disabled={!file || isUploading}
              className="bg-black text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-900 transition-colors disabled:opacity-50"
            >
              {isUploading ? 'Uploading...' : 'Start Upload'}
              <UploadCloud className="w-6 h-6 inline-block ml-2" />
            </button>

            {/* Progress Bar */}
            {isUploading && (
              <div className="w-full bg-black rounded-full mt-6">
                <div
                  className="bg-white text-xs font-medium text-black text-center p-1 leading-none rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                >
                  {uploadProgress}%
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Add New Case Section */}
        <section className="container mx-auto px-4 py-10 flex flex-col items-center">
          <div className="bg-white text-black p-8 rounded-lg w-full max-w-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Add a New Case</h2>
            <p className="text-gray-600 mb-6">Create a new forensic case to manage and upload evidence for analysis.</p>

            {/* Add New Case Button */}
            <button className="bg-black text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-900 transition-colors">
              Add New Case
              <PlusCircle className="w-6 h-6 inline-block ml-2" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;

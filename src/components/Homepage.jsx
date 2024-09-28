import React, { useState } from 'react';
import { Search, Database, FileText, Clock, Shield, BarChart2 } from 'lucide-react';
import Navbar from './Navbar';
const Homepage = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Automated Evidence Collection",
      description: "Integrate disk imaging tools for importing forensic images. Our ingestion pipeline parses, validates, and indexes evidence from various formats.",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Automated Data Scanning & Analysis",
      description: "Automate scanning of files, system logs, registry entries, and network data with support for modular scans.",
    },
    {
      icon: <BarChart2 className="w-12 h-12" />,
      title: "Evidence Prioritization",
      description: "Utilize AI/ML models to prioritize evidence based on context. Introduce a 'Forensic Relevance Score' to assign risk scores to suspicious events.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "IOCs & Suspicious Activity Detection",
      description: "Leverage databases to identify known IOCs. Apply heuristic techniques to detect anomalies and unusual patterns.",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Interactive Timelines & Graphical Summaries",
      description: "Create interactive timelines and graphical summaries for a clear investigative narrative. Support real-time visualization for fast pattern recognition.",
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Evidence Reporting",
      description: "Generate detailed reports in PDF, JSON, and CSV formats. Offer customizable templates for different case types.",
    },
  ];

  const uniqueFeatures = [
    "Predictive Forensic Analysis",
    "Modularity & Extensibility",
    "Security & Compliance",
    "Collaborative Workspace",
    "Recommendation Engine",
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Digital Forensic & Incident Response Tool</h1>
        <p className="text-xl mb-10">Advanced analytics for rapid cyber incident investigation</p>
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg cursor-pointer transition-all hover:bg-gray-800"
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className={`text-gray-300 mb-4 transition-all ${activeFeature === index ? 'scale-110' : ''}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className={`text-gray-400 transition-all ${activeFeature === index ? 'opacity-100' : 'opacity-0 h-0'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Uniqueness Section */}
      <section className="bg-white text-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Unique</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-200 px-6 py-3 rounded-full text-lg font-semibold">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Revolutionize Your Digital Forensics?</h2>
        <p className="text-xl mb-10">Join the next generation of cyber investigators with our cutting-edge tool.</p>
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
          Request a Demo
        </button>
      </section>
    </div>
    </>
    
  );
};

export default Homepage;
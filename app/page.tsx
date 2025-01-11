'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [downloadUrl, setDownloadUrl] = useState("/WinSP.exe");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, { threshold: 0.1 })

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    }) 

    return () => observer.disconnect()
  }, [])

  const handleDownload = () => {
    window.open(downloadUrl, '_blank')
  }

  return (
    <main className="min-h-screen bg-[#0a1929] text-gray-100 relative overflow-hidden">
      
     
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 pointer-events-none"></div>
      
      
      <nav className="sticky top-0 bg-[#0a1929]/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
              WinSP
            </Link>
            <div className="flex space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Features
              </Link>
              <Link href="#components" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Components
              </Link>
              <Link href="#core-processes" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Core Processes
              </Link>
              <Link href="#download" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Download
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section 
        ref={(el) => (sectionsRef.current[0] = el)} 
        className="min-h-screen flex items-center justify-center relative pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse">
              Windows Service Protector (WinSP)
            </h1>
            <p className="text-xl sm:text-2xl mb-12 text-gray-300 max-w-3xl">
              Comprehensive Windows Service management tool for system monitoring, threat assessment, and security analysis.
            </p>
            <button 
              onClick={handleDownload}
              className="bg-cyan-500 hover:bg-cyan-400 text-white text-lg px-8 py-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10">Download WinSP</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
          <div className="flex-1 relative h-[600px] w-full rounded-xl overflow-hidden">
            <Image
              src="/WinSP_logo.png"
              alt="WinSP Interface"
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mix-blend-overlay"></div>
          </div>
        </div>
      </section>

     
      <section 
        id="features" 
        ref={(el) => (sectionsRef.current[1] = el)} 
        className="py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <FeatureCard 
              icon="🛡️"
              title="Service Management"
              description="Install, start, stop, restart, and uninstall the WinSP Service with ease."
            />
            <FeatureCard 
              icon="🔍"
              title="Threat Monitoring"
              description="Scan system changes and generate logs of new or modified services."
            />
            <FeatureCard 
              icon="📊"
              title="Logging and Reporting"
              description="Generate daily logs for service changes and have a realtime status report."
            />
            <FeatureCard 
              icon="✅"
              title="Whitelist Management"
              description="Edit, generate, and maintain a whitelist of trusted hashes system-wide."
            />
            <FeatureCard 
              icon="🌐"
              title="VirusTotal Integration"
              description="Automatically check hashes against VirusTotal API for threat assessment."
            />
            <FeatureCard 
              icon="🔔"
              title="Real-time Notifications"
              description="Receive Windows notifications for detected threats or clean system confirmations."
            />
          </div>
        </div>
      </section>

     


      
      <section 
        id="core-processes" 
        ref={(el) => (sectionsRef.current[4] = el)} 
        className="py-32 relative bg-gradient-to-b from-[#0a1929] via-[#0f2942] to-[#0a1929]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Core Processes
          </h2>
          <div className="flex flex-nowrap overflow-x-auto pb-8 space-x-8">
            <ProcessCard
              number={1}
              title="Install"
              description="Installs necessary tools, configures the WinSP service, and sets up file paths."
            />
            <ProcessCard
              number={2}
              title="Initial Setup"
              description="Installs tools, configures the WinSP service, and initializes configurations all from the GUI."
            />
            <ProcessCard
              number={3}
              title="Service Execution"
              description="Runs system scans, detects changes, and performs threat assessments all as a background process with extremely low overhead."
            />
            <ProcessCard
              number={4}
              title="Threat Detection"
              description="Manages whitelist and integrates with VirusTotal for hash-based threat analysis as well as differences detection between scans."
            />
            <ProcessCard
              number={5}
              title="Real-Time Notifications"
              description="Monitors scan results and sends desktop notifications for threats or clean system confirmations."
            />
            <ProcessCard
              number={6}
              title="Authenticode Verification"
              description="Scans critical directories of Windows critical services for file signatures and logs results for auditing."
            />
          </div>
        </div>
      </section>

      <section 
        id="download" 
        ref={(el) => (sectionsRef.current[3] = el)} 
        className="py-32 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Ready to Secure Your Windows Services?
            </h2>
            <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
              Download WinSP now and take control of your system's security with this powerful monitoring and detection tool today!
            </p>
            <button 
              onClick={handleDownload}
              className="bg-cyan-500 hover:bg-cyan-400 text-white text-xl px-10 py-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10">Download WinSP</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <p className="mt-4 text-sm text-gray-400">
              Note: WinSP currently uses a self-signed certificate. You may receive a Defender SmartScreen notification. The app is not malicious and all source code can be read from the repository on GitHub.
            </p>
          </div>
        </div>
      </section>


      <footer className="border-t border-cyan-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2024 WinSP. Created by William McCoy. All rights reserved.</p>
          <div className="mt-4 space-x-8">
            <Link href="https://github.com/WillMcX/Windows-Services-Project-WinSP/blob/main/README.md" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Documentation
            </Link>
            <Link href="https://github.com/WillMcX/Windows-Services-Project-WinSP" className="text-gray-300 hover:text-cyan-400 transition-colors">
              GitHub Repository
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-[#0f2942] bg-opacity-50 p-8 rounded-lg text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-75 hover:shadow-lg hover:shadow-cyan-500/10 border border-cyan-500/20 group">
      <div className="text-5xl mb-6 group-hover:animate-pulse">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

interface ComponentCardProps {
  title: string
  items: string[]
}

function ComponentCard({ title, items }: ComponentCardProps) {
  return (
    <div className="bg-[#0f2942] bg-opacity-50 p-8 rounded-lg transition-all duration-300 hover:bg-opacity-75 hover:shadow-lg hover:shadow-cyan-500/10 border border-cyan-500/20">
      <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300 flex items-center">
            <span className="text-cyan-400 mr-2">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

interface ProcessCardProps {
  number: number
  title: string
  description: string
}

function ProcessCard({ number, title, description }: ProcessCardProps) {
  return (
    <div className="flex-shrink-0 w-80 bg-[#0f2942] bg-opacity-50 p-6 rounded-lg transition-all duration-300 hover:bg-opacity-75 hover:shadow-lg hover:shadow-cyan-500/10 border border-cyan-500/20 group">
      <div className="flex items-center mb-4">
        <span className="text-3xl font-bold text-cyan-400 mr-4">{number}</span>
        <ArrowRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-2 transition-transform" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        {title}
      </h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  )
}


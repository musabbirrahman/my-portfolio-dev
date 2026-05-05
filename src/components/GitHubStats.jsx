"use client";
import { useState, useEffect } from "react";

export default function GitHubStats() {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching your live data on the client side
    fetch('https://api.github.com/users/musabbirrahman')
      .then((res) => res.json())
      .then((data) => {
        setGithubData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Telemetry error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-base-100/30 backdrop-blur-sm border border-neutral-content/10 rounded-lg p-5 mt-8 hover:border-primary/50 transition-colors duration-500 relative overflow-hidden group">
      
      {/* Background scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none z-0"></div>

      <div className="relative z-10">
        <h4 className="text-xs uppercase font-mono text-base-content/50 mb-4 flex items-center gap-2">
          {loading ? (
            <span className="text-warning animate-pulse">●</span>
          ) : (
            <span className="text-success animate-pulse">●</span>
          )}
          LIVE_TELEMETRY // GitHub
        </h4>
        
        {loading ? (
          /* High-Tech Loading State */
          <div className="py-4 font-mono text-sm text-primary animate-pulse flex flex-col gap-2">
            <span>&gt; Establishing secure connection...</span>
            <span>&gt; Fetching repository nodes...</span>
          </div>
        ) : (
          /* Active Data State */
          <>
            <div className="grid grid-cols-2 gap-4 font-mono">
              {/* Public Repos */}
              <div className="flex flex-col">
                <span className="text-base-content/40 text-xs">Public_Repos</span>
                <span className="text-2xl font-bold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                  {githubData?.public_repos || "00"}
                </span>
              </div>

              {/* Followers */}
              <div className="flex flex-col">
                <span className="text-base-content/40 text-xs">Network_Nodes</span>
                <span className="text-2xl font-bold text-base-content group-hover:text-secondary transition-colors">
                  {githubData?.followers || "00"}
                </span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-neutral-content/10 text-xs text-base-content/40 flex justify-between">
              <span>STATUS: TRACKING</span>
              <a href={githubData?.html_url || "https://github.com/musabbirrahman"} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                [VIEW_SOURCE]
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
'use client'

import MenuBar from './layout/MenuBar';
import StatusBar from './layout/StatusBar';
import Drawer from './layout/Drawer';
import SidebarIcons from './layout/SidebarIcons';
import EditorTabs from './layout/EditorTabs';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface GithubData {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  repos_url: string;
}

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}

export default function GithubScreen() {
  const [githubData, setGithubData] = useState<GithubData | null>(null);
  const [repos, setRepos] = useState<Repo[] | null>(null);

  useEffect(() => {
    const githubUrl = 'https://api.github.com/users/hiep1810';
    fetch(githubUrl)
      .then(response => response.json())
      .then(data => {
        setGithubData(data);
        // Fetch repositories after getting user data
        return fetch(data.repos_url);
      })
      .then(response => response.json())
      .then(repoData => setRepos(repoData))
      .catch(error => console.error('Error fetching GitHub data:', error));
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <MenuBar />
      <div className="flex-1 flex overflow-hidden">
        <SidebarIcons />
        <Drawer />
        <main className="flex-1 bg-[#1e1e1e] overflow-hidden">
          <EditorTabs />
          {/* Projects content here */}
          {githubData && repos && (
          <div className="p-10 bg-[#1E2022] text-center h-full overflow-auto scrollbar-vscode-thick text-white">
            <div className="flex flex-col space-y-8">
              {/* User info */}
              <div className="flex flex-row items-stretch justify-center w-full">
                <div className="flex items-stretch bg-[#1A1A1A] p-4 pr-10 pl-10 max-w-4xl w-full">
                  <div className="flex flex-col items-center justify-center border-r border-[#606060] px-8 py-4 flex-1">
                    {githubData?.avatar_url && (
                      <Image
                        src={githubData.avatar_url}
                        alt="Avatar"
                        width={50}
                        height={50}
                        unoptimized
                        className="rounded-full"
                      />
                    )}
                    <div className="text-xl font-semibold">{githubData?.login}</div>
                  </div>

                  <div className="flex flex-col justify-center border-r border-[#606060] px-8 py-4 flex-1">
                    <div className="font-bold">{githubData?.public_repos}</div>
                    <div className="text-sm text-gray-400">Public Repos</div>
                  </div>
                  <div className="flex flex-col justify-center border-r border-[#606060] px-8 py-4 flex-1">
                    <div className="font-bold">{githubData?.followers}</div>
                    <div className="text-sm text-gray-400">Followers</div>
                  </div>
                  <div className="flex flex-col justify-center px-8 py-4 flex-1">
                    <div className="font-bold">{githubData?.following}</div>
                    <div className="text-sm text-gray-400">Following</div>
                  </div>
                </div>
              </div>

              {/* Repository grid */}
              <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
                {repos.map((repo) => (
                  <div key={repo.id} className="bg-[#1A1A1A] p-6 rounded-lg text-left">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-blue-400 overflow-hidden text-ellipsis">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          {repo.name}
                        </a>
                      </h3>
                      <span className="text-sm text-gray-400">
                        ⭐ {repo.stargazers_count}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">
                      {repo.description || 'No description available'}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      {repo.language && (
                        <span className="flex items-center">
                          <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                          {repo.language}
                        </span>
                      )}
                      <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          )}
        </main>
      </div>
      <StatusBar />
    </div>
  );
} 
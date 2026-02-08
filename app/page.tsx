import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServerIPCard } from '@/components/server-ip-card';

// Label mapping
const FILE_LABELS: Record<string, string> = {
  'VanillaTweaks1.21.11.zip': 'Vanilla Tweaks 1.21.11',
  'MineCurry Mods.zip': 'MineCurry Mods',
};

async function getFiles() {
  const filesDirectory = path.join(process.cwd(), 'public/files');
  try {
    const filenames = await fs.promises.readdir(filesDirectory);
    // Filter out hidden files
    return filenames.filter((file) => !file.startsWith('.'));
  } catch (error) {
    console.error('Error reading files directory:', error);
    return [];
  }
}

export default async function Home() {
  const files = await getFiles();

  return (
    <div className="min-h-screen bg-background">
      <main className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 max-w-6xl">
        <div className="space-y-16">
          {/* Hero */}
          <section className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-linear-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Welcome to MineCurry
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Join our Minecraft community today!
            </p>
          </section>

          {/* Server IP Section */}
          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Server IP</h2>
              <p className="text-muted-foreground">
                Connect to the server with the following address
              </p>
            </div>
            <div className="max-w-md">
              <ServerIPCard />
            </div>
          </section>

          {/* Getting Started */}
          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">
                Getting Started
              </h2>
              <p className="text-muted-foreground">
                Follow these steps to join the server
              </p>
            </div>
            <div className="bg-card border rounded-xl p-8 max-w-2xl">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    1
                  </span>
                  <div className="flex-1 pt-1">
                    <p className="text-foreground">
                      Download the <strong>MineCurry Mods</strong> file from the
                      downloads section below
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    2
                  </span>
                  <div className="flex-1 pt-1">
                    <p className="text-foreground">
                      Import the profile in <strong>CurseForge</strong>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      This modpack is required to play on the server
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    3
                  </span>
                  <div className="flex-1 pt-1">
                    <p className="text-foreground">
                      Launch the game and connect to{' '}
                      <code className="bg-muted px-2 py-1 rounded font-mono text-sm">
                        minecurry.org
                      </code>
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Downloads */}
          <section className="space-y-6 pb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Downloads</h2>
              <p className="text-muted-foreground">
                Get the files you need to start playing
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              {files.length > 0 ? (
                files.map((file) => (
                  <Button
                    key={file}
                    asChild
                    size="lg"
                    className="w-full text-lg h-20 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Link href={`/files/${file}`} download>
                      <Download className="mr-2 h-6 w-6" />
                      {FILE_LABELS[file] || file}
                    </Link>
                  </Button>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 text-center p-8 border border-dashed rounded-lg bg-card/50">
                  <p className="text-muted-foreground">
                    No files available for download at the moment.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

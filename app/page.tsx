import fs from 'fs';
import path from 'path';
import { ServerIPCard } from '@/components/server-ip-card';
import { GettingStartedCard } from '@/components/getting-started-card';
import { DownloadsCard } from '@/components/downloads-card';

async function getFiles() {
  const filesDirectory = path.join(process.cwd(), 'public/files');
  try {
    const filenames = await fs.promises.readdir(filesDirectory);
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
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-12 max-w-7xl">
        <div className="space-y-12">
          {/* Hero */}
          <section className="flex flex-col items-center text-center space-y-4 pt-8 pb-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Welcome to{' '}
              <span className="bg-gradient-to-br from-[#654389] to-[#654389] bg-clip-text font-[inherit]">
                MineCurry
              </span>
            </h1>
            <h3 className="text-xl text-muted-foreground max-w-[600px]">
              The Un-Official Curry College Minecraft Server!
            </h3>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-1 flex flex-col gap-6 lg:gap-8">
              <ServerIPCard />
              <DownloadsCard files={files} />
            </div>
            <div className="lg:col-span-2">
              <GettingStartedCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

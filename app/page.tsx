import fs from "fs";
import path from "path";
import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

// Label mapping
const FILE_LABELS: Record<string, string> = {
  "VanillaTweaks1.21.11.zip": "Vanilla Tweaks 1.21.11",
  "MineCurryModlist.zip": "MineCurry Modlist",
};

async function getFiles() {
  const filesDirectory = path.join(process.cwd(), "public/files");
  try {
    const filenames = await fs.promises.readdir(filesDirectory);
    // Filter out hidden files
    return filenames.filter((file) => !file.startsWith("."));
  } catch (error) {
    console.error("Error reading files directory:", error);
    return [];
  }
}

export default async function Home() {
  const files = await getFiles();

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="z-10 max-w-3xl w-full text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground">
            MineCurry
          </h1>
        </div>

        {/* Downloads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg mx-auto">
          {files.length > 0 ? (
            files.map((file) => (
              <Button
                key={file}
                asChild
                size="lg"
                className="w-full text-lg h-16 shadow-lg hover:shadow-xl transition-all"
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
      </div>
    </main>
  );
}

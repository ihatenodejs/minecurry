import Link from 'next/link';
import { TbDownload } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const FILE_LABELS: Record<string, string> = {
  'VanillaTweaks1.21.11.zip': 'Vanilla Tweaks 1.21.11',
  'MineCurry Mods.zip': 'MineCurry Mods',
};

function getFileLabel(filename: string): string {
  if (filename.includes('MineCurry Mods') && filename.endsWith('.zip')) {
    const versionMatch = filename.match(/MineCurry Mods-(.+)\.zip/);
    if (versionMatch) {
      return `MineCurry Mods v${versionMatch[1]}`;
    }
  }
  return FILE_LABELS[filename] || filename;
}

interface DownloadsCardProps {
  files: string[];
}

export function DownloadsCard({ files }: DownloadsCardProps) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <TbDownload className="h-6 w-6 text-primary" />
          Downloads
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
          {files.length > 0 ? (
            files.map((file) => (
              <Button
                key={file}
                asChild
                size="lg"
                className="w-full text-lg h-16 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Link href={`/files/${file}`} download>
                  <TbDownload className="h-6 w-6 shrink-0" />
                  <span className="truncate">{getFileLabel(file)}</span>
                </Link>
              </Button>
            ))
          ) : (
            <div className="col-span-full text-center p-8 border border-dashed rounded-lg bg-muted/50">
              <p className="text-muted-foreground">
                No files available for download at the moment.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

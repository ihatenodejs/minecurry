import Link from 'next/link';
import { TbDownload, TbChevronDown } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type ModpackFile = {
  name: string;
  url: string;
  size: number;
};

export type ModpackData = {
  default: ModpackFile[];
  builder: ModpackFile[];
};

interface DownloadsCardProps {
  modpackData: ModpackData;
}

function formatBytes(bytes: number, decimals = 1) {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

function getVersion(filename: string): string {
  const match = filename.match(/-(.+)\.zip/);
  return match ? match[1] : 'Unknown';
}

function ModpackDownloadGroup({
  title,
  files,
}: {
  title: string;
  files: ModpackFile[];
}) {
  if (files.length === 0) return null;

  const latest = files[0];
  const older = files.slice(1);

  return (
    <div className="flex w-full">
      <Button
        asChild
        size="lg"
        className={`flex-1 text-lg h-16 shadow-sm hover:shadow-md transition-all flex items-center justify-start gap-2 px-4 ${
          older.length > 0
            ? 'rounded-r-none border-r border-r-primary-foreground/20'
            : ''
        }`}
      >
        <Link href={latest.url} download>
          <div className="flex items-center gap-3 overflow-hidden w-full min-w-0">
            <TbDownload className="h-6 w-6 shrink-0" />
            <div className="flex flex-col items-start overflow-hidden min-w-0 flex-1">
              <span className="truncate w-full text-left font-semibold">
                {title}
              </span>
              <span className="text-xs text-primary-foreground/80 font-normal truncate w-full text-left">
                v{getVersion(latest.name)} • {formatBytes(latest.size)}
              </span>
            </div>
          </div>
        </Link>
      </Button>
      {older.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="lg"
              className="h-16 px-3 rounded-l-none border-l-0 shadow-sm shrink-0"
            >
              <TbChevronDown className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Older Versions
            </div>
            {older.map((file) => (
              <DropdownMenuItem key={file.name} asChild>
                <Link
                  href={file.url}
                  download
                  className="flex flex-col items-start w-full cursor-pointer py-2"
                >
                  <span className="font-medium">v{getVersion(file.name)}</span>
                  <span className="text-xs text-muted-foreground">
                    {formatBytes(file.size)}
                  </span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}

export function DownloadsCard({ modpackData }: DownloadsCardProps) {
  const hasFiles =
    modpackData.default.length > 0 || modpackData.builder.length > 0;

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <TbDownload className="h-6 w-6 text-primary" />
          Downloads
        </CardTitle>
      </CardHeader>
      <CardContent>
        {hasFiles ? (
          <div className="flex flex-col gap-4">
            <ModpackDownloadGroup
              title="MineCurry Modpack"
              files={modpackData.default}
            />
            <ModpackDownloadGroup
              title="MineCurry Modpack (Builder)"
              files={modpackData.builder}
            />
          </div>
        ) : (
          <div className="text-center p-8 border border-dashed rounded-lg bg-muted/50">
            <p className="text-muted-foreground">
              No files available for download at the moment.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

import { Play } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function GettingStartedCard() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Play className="h-6 w-6 text-primary" />
          Getting Started
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="space-y-6">
          <li className="flex gap-4">
            <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
              1
            </span>
            <div className="flex-1 pt-1">
              <p className="text-foreground text-lg">
                Download the <strong>MineCurry Mods</strong> file from the
                downloads section
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
              2
            </span>
            <div className="flex-1 pt-1">
              <p className="text-foreground text-lg">
                Import the profile in <strong>CurseForge</strong>
              </p>
              <p className="text-muted-foreground mt-1">
                This modpack is required to play on the server
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
              3
            </span>
            <div className="flex-1 pt-1">
              <p className="text-foreground text-lg">
                Launch Minecraft and connect to{' '}
                <code className="bg-muted px-2 py-1 rounded font-mono text-base border">
                  minecurry.org
                </code>
              </p>
            </div>
          </li>
        </ol>
      </CardContent>
    </Card>
  );
}

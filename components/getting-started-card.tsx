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
              <div className="flex gap-4 mt-3 items-stretch">
                <figure className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/image/MineCurryStep2-Image1.png"
                      alt="Click the Import button in CurseForge"
                      className="rounded border w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="text-xs text-muted-foreground text-center">
                    <span className="font-bold">1.</span> Click the
                    &quot;Import&quot; button
                  </figcaption>
                </figure>
                <figure className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/image/MineCurryStep2-Image2.png"
                      alt="Click the Choose .zip file button"
                      className="rounded border w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="text-xs text-muted-foreground text-center">
                    <span className="font-bold">2.</span> Click the &quot;Choose
                    .zip file&quot; button
                  </figcaption>
                </figure>
              </div>
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

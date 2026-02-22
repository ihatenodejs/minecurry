'use client';
import React from 'react';
import { Copy, Check } from 'lucide-react';
import { TbGlobe } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function ServerIPCard() {
  const [copied, setCopied] = React.useState(false);
  const serverIP = 'minecurry.org';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <TbGlobe className="h-6 w-6 text-primary" />
          Server IP
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between bg-muted/50 border rounded-lg p-4">
          <code className="text-xl md:text-2xl font-mono font-bold text-foreground tracking-tight">
            {serverIP}
          </code>
          <Button
            variant="secondary"
            size="icon"
            onClick={copyToClipboard}
            className="ml-3 shrink-0"
            title="Copy to clipboard"
          >
            {copied ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

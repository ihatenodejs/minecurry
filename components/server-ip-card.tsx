'use client';
import React from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ServerIPCard() {
  const [copied, setCopied] = React.useState(false);
  const serverIP = 'minecurry.org';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
        <code className="text-2xl font-mono font-bold text-foreground tracking-tight">
          {serverIP}
        </code>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="ml-3 hover:bg-background shrink-0"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <Copy className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  );
}

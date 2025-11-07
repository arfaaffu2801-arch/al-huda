'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TrackerIcon } from './TrackerIcon';

export function Tracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <TrackerIcon className="h-6 w-6 text-primary" />
          Prayer Tracker
        </CardTitle>
        <CardDescription>
          Track your daily prayers and stay consistent.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex h-[400px] items-center justify-center rounded-lg border-2 border-dashed bg-secondary/30">
          <p className="text-muted-foreground">
            Prayer Tracker Coming Soon...
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

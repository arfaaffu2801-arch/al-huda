'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getQiblaDirection, KAABA_COORDS } from '@/lib/islamic';
import { Compass, LocateFixed, Navigation } from 'lucide-react';
import { useEffect, useState } from 'react';

type PermissionState = 'prompt' | 'granted' | 'denied';

export function QiblaFinder() {
  const [permission, setPermission] = useState<PermissionState>('prompt');
  const [qiblaDirection, setQiblaDirection] = useState<number | null>(null);
  const [deviceHeading, setDeviceHeading] = useState<number | null>(null);

  const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
    let heading: number | null = null;
    // For iOS
    if ((event as any).webkitCompassHeading) {
      heading = (event as any).webkitCompassHeading;
    }
    // For other devices
    else if (event.alpha !== null) {
      heading = 360 - event.alpha;
    }

    if (heading !== null) {
      // Apply smoothing
      setDeviceHeading((prevHeading) => {
        if (prevHeading === null) return heading;
        // Basic smoothing to reduce jitter
        return prevHeading * 0.9 + heading! * 0.1;
      });
    }
  };

  const requestPermissions = async () => {
    if (
      typeof (DeviceOrientationEvent as any).requestPermission === 'function'
    ) {
      try {
        const response = await (
          DeviceOrientationEvent as any
        ).requestPermission();
        if (response === 'granted') {
          window.addEventListener(
            'deviceorientation',
            handleDeviceOrientation,
            true
          );
        }
      } catch (error) {
        console.error('Sensor permission request failed', error);
      }
    } else {
      window.addEventListener(
        'deviceorientation',
        handleDeviceOrientation,
        true
      );
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const direction = getQiblaDirection({
          lat: latitude,
          lng: longitude,
        });
        setQiblaDirection(direction);
        setPermission('granted');
      },
      () => {
        setPermission('denied');
        // Fallback to a default if location is denied
        const direction = getQiblaDirection({ lat: 25, lng: 45 });
        setQiblaDirection(direction);
      }
    );
  };

  useEffect(() => {
    return () => {
      window.removeEventListener(
        'deviceorientation',
        handleDeviceOrientation,
        true
      );
    };
  }, []);

  const compassRotation =
    qiblaDirection !== null && deviceHeading !== null
      ? qiblaDirection - deviceHeading
      : 0;

  const renderContent = () => {
    if (permission === 'prompt') {
      return (
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <LocateFixed className="h-12 w-12 text-muted-foreground" />
          <p>
            To find the Qibla direction, we need access to your device's
            location and orientation sensors.
          </p>
          <Button onClick={requestPermissions}>
            <Compass className="mr-2 h-4 w-4" /> Grant Permission
          </Button>
        </div>
      );
    }
    if (permission === 'denied' && qiblaDirection === null) {
      return <p>Permission denied. Cannot determine Qibla direction.</p>;
    }
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-48 w-48">
          <div
            className="h-full w-full rounded-full border-4 border-primary/20 bg-secondary/30"
            style={{
              transform: `rotate(${-deviceHeading!}deg)`,
              transition: 'transform 0.5s ease-out',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center font-bold text-primary">
              N
            </div>
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `rotate(${compassRotation}deg)`,
              transition: 'transform 0.5s ease-out',
            }}
          >
            <div className="relative h-full w-full">
              <Navigation
                className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 text-accent"
                fill="hsl(var(--accent))"
              />
            </div>
          </div>
        </div>
        <p className="mt-4 text-lg font-semibold">
          {qiblaDirection !== null
            ? `${Math.round(qiblaDirection)}°`
            : 'Calculating...'}
        </p>
        <p className="text-sm text-muted-foreground">
          Point the gold arrow towards the Qibla
        </p>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <Compass className="h-6 w-6 text-primary" />
          Qibla Direction
        </CardTitle>
        <CardDescription>
          Find the direction of the Kaaba from your current location.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex h-64 items-center justify-center">
        {renderContent()}
      </CardContent>
    </Card>
  );
}

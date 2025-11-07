'use client';

import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Loader2, Compass, Ban } from 'lucide-react';
import { getQiblaDirection } from '@/lib/islamic';
import { QiblaIcon } from './QiblaIcon';

export function Qibla() {
  const [qiblaDirection, setQiblaDirection] = useState<number | null>(null);
  const [deviceOrientation, setDeviceOrientation] = useState<number | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [permissionGranted, setPermissionGranted] = useState<boolean | null>(
    null
  );

  const handleOrientation = (event: DeviceOrientationEvent) => {
    if (event.webkitCompassHeading) {
      // For iOS
      setDeviceOrientation(event.webkitCompassHeading);
    } else if (event.alpha !== null) {
      // For other devices
      setDeviceOrientation(360 - event.alpha);
    }
  };

  const requestPermissions = async () => {
    try {
      // Request location permission
      await new Promise<void>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const direction = getQiblaDirection({
              lat: latitude,
              lng: longitude,
            });
            setQiblaDirection(direction);
            setPermissionGranted(true);
            resolve();
          },
          (err) => {
            setError(
              'Location permission denied. Please enable location services to use this feature.'
            );
            setPermissionGranted(false);
            reject(err);
          },
          { enableHighAccuracy: true }
        );
      });

      // Request device orientation permission
      if (
        typeof (DeviceOrientationEvent as any).requestPermission === 'function'
      ) {
        const permissionState = await (
          DeviceOrientationEvent as any
        ).requestPermission();
        if (permissionState === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation);
        } else {
          setError('Device orientation permission was not granted.');
        }
      } else {
        // For non-iOS 13+ devices
        window.addEventListener('deviceorientation', handleOrientation);
      }
    } catch (err) {
      console.error('Permission error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    requestPermissions();

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  const totalRotation =
    deviceOrientation !== null && qiblaDirection !== null
      ? deviceOrientation - qiblaDirection
      : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline">
          <QiblaIcon className="h-6 w-6" />
          Qibla Direction
        </CardTitle>
        <CardDescription>
          Point your device to find the direction of the Kaaba.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4 text-center">
        {loading && (
          <div className="flex h-64 flex-col items-center justify-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">
              Requesting permissions...
            </p>
          </div>
        )}

        {error && (
          <Alert variant="destructive" className="h-64">
            <Ban className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
            <Button
              onClick={requestPermissions}
              variant="secondary"
              className="mt-4"
            >
              Retry Permissions
            </Button>
          </Alert>
        )}

        {!loading && permissionGranted && qiblaDirection !== null && (
          <div className="relative h-64 w-64">
            <div className="absolute inset-0 flex items-center justify-center">
              <Compass className="h-full w-full text-muted-foreground/20" />
            </div>
            <div
              className="absolute inset-0 transition-transform duration-500"
              style={{
                transform: `rotate(${-totalRotation}deg)`,
              }}
            >
              <div className="relative h-full w-full">
                <div
                  className="absolute left-1/2 top-0 -translate-x-1/2"
                  style={{
                    transformOrigin: 'bottom center',
                  }}
                >
                  <QiblaIcon className="h-10 w-10 text-primary" />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">
                  {qiblaDirection.toFixed(0)}°
                </span>
                <span className="text-sm text-muted-foreground">from North</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

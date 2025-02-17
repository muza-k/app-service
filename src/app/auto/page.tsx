'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AutoRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/auto/vehicle');
  }, [router]);

  return null;
} 
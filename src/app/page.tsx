"use client"

import { useState } from 'react';
import {Header, TradeAsset} from '@/components';
import { useTheme } from 'next-themes';

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  const toggleTheme = () => {
    const newTheme = selectedTheme === 'dark' ? 'light' : 'dark';
    setSelectedTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <TradeAsset />
      {/* Другой контент страницы */}
    </>
  );
}

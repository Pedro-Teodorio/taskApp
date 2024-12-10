import React from 'react';
import { icons } from 'lucide-react-native';

type IconProps = {
    name: string;
    size: number;
    color: string;
}

export function Icon({ name, size, color }: IconProps) {
    const LucideIcon = icons[name as keyof typeof icons];
    return <LucideIcon size={size} color={color} />;
}




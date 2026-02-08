import React from 'react';
import { WidgetConfig, ThemeConfig } from '../../types';
import { CountdownWidget } from './CountdownWidget';
import { ChecklistWidget } from './ChecklistWidget';
import { WeatherWidget } from './WeatherWidget';
import { MapWidget } from './MapWidget';
import { ChatWidget } from './ChatWidget';
import { ExpensesWidget } from './ExpensesWidget';
import { PhotoGridWidget } from './PhotoGridWidget';
import { StatsWidget } from './StatsWidget';
import { TimelineWidget } from './TimelineWidget';
import { DocumentsWidget } from './DocumentsWidget';
import { Card } from '../ui/card';

const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
  countdown: CountdownWidget,
  checklist: ChecklistWidget,
  weather: WeatherWidget,
  map: MapWidget,
  chat: ChatWidget,
  expenses: ExpensesWidget,
  photos: PhotoGridWidget,
  stats: StatsWidget,
  timeline: TimelineWidget,
  documents: DocumentsWidget,
};

interface WidgetFactoryProps {
  config: WidgetConfig;
  data: any; // Context data to pass down
  theme: ThemeConfig;
}

export const WidgetFactory = ({ config, data, theme }: WidgetFactoryProps) => {
  const Component = COMPONENT_MAP[config.type];

  if (!Component) return null;

  // Pass specific props based on widget type if needed
  const specificProps = config.type === 'countdown' ? { daysLeft: data.daysUntilTrip } : {};

  return (
    <Card
      title={config.title}
      className={`h-full ${config.colSpan === 2 ? 'md:col-span-2' : ''}`}
      theme={theme}
    >
      <Component {...specificProps} theme={theme} />
    </Card>
  );
};

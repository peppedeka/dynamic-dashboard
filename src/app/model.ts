export interface Board {
  title: string;
  boardInstanceId: number;
  components: Component[];
}
export type Component = News | CPU | Trend;
export interface BaseComponent {
  componentType: ComponentType;
  name: string;
  type: string;
  description: string;
  instanceId: number;
}
export interface News extends BaseComponent {
  componentType: ComponentType.NewsComponent;
  items: Item[];
}
export interface Item {
  title: string;
  body: string;
  order: number;
  url: string;
}
export interface Property {
  key: string;
  label: string;
}
export interface CPUProperty extends Property {
  value: string | number;
  order: number;
}
export interface TrendProperty extends Property {
  value: number;
}
export interface CPU extends BaseComponent {
  componentType: ComponentType.CPUComponent;
  properties: CPUProperty[];
}
export interface Trend extends BaseComponent {
  componentType: ComponentType.TrendComponent;
  properties: TrendProperty[];
}
export enum ComponentType {
  NewsComponent = 'NewsComponent',
  CPUComponent = 'CPUComponent',
  TrendComponent = 'TrendComponent',
}

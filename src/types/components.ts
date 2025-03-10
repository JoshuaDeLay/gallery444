
export interface LocationData {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface WeatherCondition {
  main: string;
  description: string;
  icon: string;
}

export interface WeatherData {
  temperature: number;
  condition: WeatherCondition;
  humidity: number;
  windSpeed: number;
  location: string;
}

export interface ArtisticRole {
  id: string;
  title: string;
  description: string;
  skills: string[];
  projects: string[];
  quote: string;
  color: string;
  accentColor: string;
}

export interface RoleAssignment {
  userId: string;
  roleId: string;
  assignedAt: string;
  groupId?: string;
}

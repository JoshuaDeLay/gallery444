interface Point {
  x: number;
  y: number;
}

interface Vector3 {
  x: number;
  y: number;
  z: number;
}

interface LocationData {
  season: string;
  weather: {
    condition: string;
    temperature: number;
    windSpeed: number;
  };
  localTime: Date;
} 
export interface PreviewLayerItem {
  fileType: string | 'image/png' | 'image/jpg';
  fitnessScore: number;
  name: string;
  base64img: string;
}

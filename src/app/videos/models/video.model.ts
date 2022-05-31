import { SafeResourceUrl } from "@angular/platform-browser";

export interface Video {
  id: number,
  title: string,
  link: string,
  language: string,
  difficulty: string,
  embed: SafeResourceUrl,
  thumbnail: string,
  createdBy: string,
  createdAt: string
}

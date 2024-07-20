import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

const constants = {
    brandName: "Shri Ganga Sagar Borewell"
}

export const headers = [
    { name: "home", url: "/" },
    { name: "services", url: "services" },
    { name: "contact", url: "contact-us" },
    { name: "about us", url: "about-us" },
  ];

export interface ServiceType {
    title: string;
    imageUrl: string;
    description?: string;
}

export const availableServices: ServiceType[] = [
    {title: "Robo", imageUrl: '/assets/borewellService.png', description: 'Robo description'},
    {title: "Robo-rebore", imageUrl: '/assets/borwell04.png', description: 'Robo-rebore description'},
    {title: "Standard", imageUrl:  '/assets/borewellService.png', description: 'Standard description'},
    {title: "Inwell", imageUrl: '/assets/borwell04.png', description: 'Inwell description'},
    {title: "Pump and motor installation", imageUrl:  '/assets/borewellRepair.png', description: 'Pump and motor installation description'},
]

export default constants;
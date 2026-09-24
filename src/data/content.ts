import { Share2, Film, PenTool, Sparkles, Cpu, Camera, Megaphone, Video, Bot } from 'lucide-react';

export interface Service {
  icon: typeof Share2;
  title: string;
  shortDescription: string;
  description: string;
  deliverables: string[];
}

export const SERVICES: Service[] = [
  {
    icon: Share2,
    title: 'Social Media Management',
    shortDescription:
      'Strategic content, publishing and community growth designed around your brand.',
    description:
      'We manage your social presence end-to-end — from content calendars and publishing schedules to community engagement and performance tracking. Every post is intentional, every platform gets a tailored approach, and every month we refine based on what actually moves the needle.',
    deliverables: ['Content calendars', 'Publishing & scheduling', 'Community engagement', 'Monthly performance reports'],
  },
  {
    icon: Camera,
    title: 'Content Creation',
    shortDescription:
      'Scroll-stopping visual content built to communicate your brand clearly and creatively.',
    description:
      'We produce original visual content — photography, creative direction, and formatted assets — that stops the scroll and communicates your message in seconds. Every piece is designed for the platform it lives on.',
    deliverables: ['Creative direction', 'Visual content production', 'Platform-formatted assets', 'Content batches'],
  },
  {
    icon: Video,
    title: 'Video Production',
    shortDescription:
      'Professional videography that captures your brand in motion — from concept to final cut.',
    description:
      'From on-set filming to creative direction, we handle the full production process. Whether it is brand stories, product showcases, or behind-the-scenes content, we shoot footage that looks cinematic and communicates your message with confidence.',
    deliverables: ['On-site videography', 'Brand story films', 'Product & event coverage', 'Creative direction'],
  },
  {
    icon: Film,
    title: 'Video Editing',
    shortDescription:
      'Short-form videos, reels and branded edits designed to capture attention.',
    description:
      'Short-form video is where attention lives. We edit reels, TikToks, and branded video content that hooks viewers in the first two seconds and keeps them watching. From raw footage to polished cut, we handle color, sound, captions, and pacing.',
    deliverables: ['Reels & short-form edits', 'Branded video content', 'Color grading', 'Captions & motion text'],
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    shortDescription:
      'Brand-aligned visual design for social, web, and print — built to look premium everywhere your brand shows up.',
    description:
      'From social posts and carousels to brand kits and marketing collateral, we design visuals that communicate clearly and look unmistakably yours. Every asset follows your brand system, ensuring consistency across every touchpoint.',
    deliverables: ['Social graphics & carousels', 'Brand kits & templates', 'Marketing collateral', 'Thumbnail & cover design'],
  },
  {
    icon: Megaphone,
    title: 'Paid Advertising',
    shortDescription:
      'Targeted ad campaigns that put your brand in front of the right people at the right time.',
    description:
      'We design and manage paid ad campaigns across social platforms — from audience research and creative production to bid management and performance optimization. Every dollar is tracked, every campaign is measured, and every result feeds back into the next iteration.',
    deliverables: ['Ad strategy & targeting', 'Creative production', 'Campaign management', 'Performance reporting'],
  },
  {
    icon: Sparkles,
    title: 'AI Content Creation',
    shortDescription:
      'AI-powered visuals and creative concepts that help brands produce more innovative content.',
    description:
      'We use AI tools to generate visuals, concepts, and creative variations that would be impossible or impractical to produce traditionally. This lets brands explore more ideas, test more directions, and ship more content without sacrificing quality.',
    deliverables: ['AI-generated visuals', 'Concept exploration', 'Creative variations', 'Rapid prototyping'],
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    shortDescription:
      'Smart automations and AI-powered workflows that help your business operate more efficiently.',
    description:
      'Beyond content, we build digital solutions — automations, integrations, and AI-powered workflows — that help brands operate more efficiently. From chatbots to content pipelines, we use technology to solve real business problems and free up your team to focus on what matters.',
    deliverables: ['Workflow automation', 'AI integrations & chatbots', 'Content pipelines', 'Process optimization'],
  },
];

export interface Project {
  client: string;
  description: string;
  fullDescription: string;
  services: string[];
  image: string;
  alt: string;
  tag: string;
  results?: string;
}

export const PROJECTS: Project[] = [
  {
    client: 'Gallery of Code',
    description:
      'A tech brand reimagined. We built a content engine that turns complex code into scroll-stopping social content.',
    fullDescription:
      'Gallery of Code came to AshLight with a deep library of programming content but no cohesive social presence. We built a content engine from scratch — transforming complex technical topics into accessible, visually striking social posts that make programming feel creative and alive. Across LinkedIn and Instagram, we established a consistent publishing rhythm, grew their audience, and positioned the brand as a voice worth following in the tech education space.',
    services: ['Social Media Management', 'Content Creation', 'Video Editing'],
    image:
      'https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Colorful programming code on a dark monitor',
    tag: 'Tech & Education',
    results: 'Consistent multi-platform publishing established',
  },
  {
    client: 'Renewables4Africa',
    description:
      'Amplifying a clean energy mission. We grew their LinkedIn from roughly 30 followers to over 600.',
    fullDescription:
      'Renewables4Africa had an important mission — advancing clean energy across the continent — but almost no digital presence to amplify it. We took over their LinkedIn strategy and grew their following from roughly 30 to over 600 during our management period. Beyond the numbers, we built a content approach that communicates complex sustainability topics in a way that resonates with professionals, partners, and supporters. Every post serves the mission.',
    services: ['Social Media Management', 'Content Strategy', 'Digital Presence'],
    image:
      'https://images.pexels.com/photos/5322775/pexels-photo-5322775.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Solar panels in a landscape at sunset',
    tag: 'Growth & Strategy',
    results: '600+ LinkedIn followers from an initial audience of ~30',
  },
  {
    client: 'Byomane',
    description:
      'A wig coloring brand given a bold creative identity — beauty-forward content as striking as the transformations.',
    fullDescription:
      "Byomane is a wig coloring brand that needed a digital presence as bold and vibrant as their color transformations. We produce ongoing creative content — beauty-forward photography, video edits, and social visuals — that showcases Byomane's color artistry and positions the brand as a premium destination for wig coloring. The result is a feed that feels like a lookbook: every post communicates craftsmanship, creativity, and confidence.",
    services: ['Content Creation', 'Video Editing', 'AI Content Creation', 'Graphics Design'],
    image:
      'https://images.pexels.com/photos/4981460/pexels-photo-4981460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Hair coloring process in a salon',
    tag: 'Wig Coloring',
    results: 'Premium brand identity established across social',
  },
];

export interface Resource {
  icon: typeof Share2;
  title: string;
  description: string;
  tag: string;
}

export const RESOURCES: Resource[] = [
  {
    icon: Share2,
    title: 'Content Template Pack',
    description: 'Plug-and-play post templates for consistent brand storytelling.',
    tag: 'Template',
  },
  {
    icon: Camera,
    title: 'Brand Launch Checklist',
    description: 'Everything to review before your next campaign goes live.',
    tag: 'Checklist',
  },
  {
    icon: Film,
    title: 'Video Edit Presets',
    description: 'Color and transition presets for short-form video edits.',
    tag: 'Presets',
  },
  {
    icon: PenTool,
    title: 'Social Media Grid Kit',
    description: 'Layout grids for planning a cohesive 9-post Instagram feed.',
    tag: 'Template',
  },
  {
    icon: Cpu,
    title: 'Content Calendar Framework',
    description: 'A monthly planning system to map content with intention.',
    tag: 'Framework',
  },
  {
    icon: Sparkles,
    title: 'AI Prompts for Brands',
    description: 'Curated AI prompts to generate on-brand creative concepts.',
    tag: 'Guide',
  },
];

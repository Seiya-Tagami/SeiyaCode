import { CheckCircleIcon, TriangleUpIcon } from '@chakra-ui/icons'
export const HOME_DATA = {
  hero: {
    title: 'Seiya:Code',
    thumbnail: '/heros/home.jpg',
  },
  history: [
    {
      date: '2022年4月',
      text: '早稲田大学法学部に入学',
      icon: CheckCircleIcon,
    },
    {
      date: '同年6月',
      text: 'サークルに所属し、プログラミングと出会う',
      icon: CheckCircleIcon,
    },
    {
      date: '同年12月頃',
      text: 'HTML, CSS, JavaScript, PHPの基礎を習得',
      icon: CheckCircleIcon,
    },
    {
      date: '2023年3月',
      text: '技術力向上のため、エンジニア長期インターンに参加',
      icon: CheckCircleIcon,
    },
    {
      date: '現在',
      text: 'Next.js、Nest.js, GraphQLを用いた、モダンな開発に挑戦中',
      icon: TriangleUpIcon,
    },
  ],
  skills: [
    {
      title: 'Now learning',
      imgPath: 'https://skillicons.dev/icons?i=nextjs,ts,nestjs,graphql,prisma&perline=3',
      alt: 'nowLearning',
    },
    {
      title: 'Daily uses',
      imgPath: 'https://skillicons.dev/icons?i=html,css,tailwind,js,react,nodejs&perline=3',
      alt: 'dailyUses',
    },
    {
      title: 'I have learned once',
      imgPath:
        'https://skillicons.dev/icons?i=php,vue,express,sass,firebase,mongodb,mysql&perline=3',
      alt: 'onceIHaveUsed',
    },
    {
      title: "I'm interested in...",
      imgPath: 'https://skillicons.dev/icons?i=rust,go,flutter,dotnet,elixir,aws,azure&perline=3',
      alt: 'nearFuture',
    },
    {
      title: 'Tools',
      imgPath:
        'https://skillicons.dev/icons?i=git,github,vscode,linux,vite,docker,apollo,vercel,figma&perline=3',
      alt: 'tools',
    },
  ],
}

import { UserTag } from 'components/tag';

export const USER_PROFILES: UserProfile[] = [
  {
    id: '1',
    summary: [
      { label: 'Ready to invest', value: '$300 k', id: '0' },
      { label: 'Exits', value: '17', id: '1' },
      { label: 'This year', value: '6 deals', id: '2' },
      { label: 'This year invest.', value: '$7 k', id: '3' },
    ],
    generalInformation:
      'FundFuture has demonstrated strong absolute returns over the past several decades. It averaged ~11% total annual returns (income + price appreciation) from 1992 to 2022. \n\nFund Future has historically been one of the strongest inflation hedges. The NCREIF Farmland Index’s Total Return has consistently provided returns more than double the inflation rate since before 1992.',
    userTags: [UserTag.web3, UserTag.blockchain],
    goals: ['To find startup', 'To find the Unicorn', 'To be a part of a big, great idea'],
    company: {
      name: 'Fund Future',
      location: 'Inc, US',
      logo: 'https://via.placeholder.com/150/372c93',
    },
    matching: 0.84,
    savedCount: '7k',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    id: '2',
    summary: [
      { label: 'Looking for investments', value: '$500 k', id: '4' },
      { label: 'Successful startups', value: '22', id: '5' },
      { label: 'Investment focus', value: 'AI & Blockchain', id: '6' },
      { label: '2023 target', value: '$10M', id: '7' },
    ],
    generalInformation:
      'TechVisionaries is an innovative venture capital firm that focuses on disruptive technology startups in AI and Blockchain. With a proven track record of success, we aim to accelerate the growth of next-gen tech companies.',
    userTags: [UserTag.ai, UserTag.blockchain],
    goals: [
      'Supporting disruptive startups',
      'Leading the next tech revolution',
      'Achieving superior ROI',
    ],
    company: {
      name: 'TechVisionaries',
      location: 'Silicon Valley, US',
      logo: 'https://via.placeholder.com/150/db7093',
    },
    matching: 0.92,
    savedCount: '12k',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  {
    id: '3',
    summary: [
      { label: 'Healthcare innovation', value: '$200 k', id: '8' },
      { label: 'MedTech pioneers', value: '15', id: '9' },
      { label: 'New patents', value: '5', id: '10' },
      { label: 'Research grants', value: '$2M', id: '11' },
    ],
    generalInformation:
      'MediInnovate specializes in advancing healthcare through technological innovation. Our focus is on developing cutting-edge MedTech solutions that can transform patient care and outcomes.',
    userTags: [UserTag.medtech],
    goals: [
      'Pioneering new treatments',
      'Partnering with healthcare providers',
      'Improving patient outcomes',
    ],
    company: {
      name: 'MediInnovate',
      location: 'Boston, US',
      logo: 'https://via.placeholder.com/150/6495ed',
    },
    matching: 0.88,
    savedCount: '5k',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
  {
    id: '4',
    summary: [
      { label: 'Fintech Innovations', value: '$750 k', id: '12' },
      { label: 'Digital Banking', value: '30', id: '13' },
      { label: 'Crypto Ventures', value: 'High Potential', id: '14' },
      { label: '2023 Goals', value: 'Expand Portfolio', id: '15' },
    ],
    generalInformation:
      'FinTech Forward is at the forefront of financial technology innovation. We invest in and partner with startups that are redefining banking, payments, and investment through technology.',
    userTags: [UserTag.fintech, UserTag.blockchain],
    goals: [
      'Leading fintech innovation',
      'Empowering digital banking',
      'Exploring new investment models',
    ],
    company: {
      name: 'FinTech Forward',
      location: 'New York, US',
      logo: 'https://via.placeholder.com/150/ff7f50',
    },
    matching: 0.95,
    savedCount: '10k',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  },
  {
    id: '5',
    summary: [
      { label: 'Eco Startups', value: '$1M', id: '16' },
      { label: 'Green Tech', value: '25+', id: '17' },
      { label: 'Sustainable Projects', value: '40+', id: '18' },
      { label: '2023 Focus', value: 'Clean Energy', id: '19' },
    ],
    generalInformation:
      'EcoVentures is dedicated to investing in startups that are making significant contributions to sustainability and environmental conservation through innovative green technologies.',
    userTags: [UserTag.web3],
    goals: [
      'Supporting sustainability',
      'Investing in green tech',
      'Promoting environmental conservation',
    ],
    company: {
      name: 'EcoVentures',
      location: 'San Francisco, US',
      logo: 'https://via.placeholder.com/150/98fb98',
    },
    matching: 0.89,
    savedCount: '8k',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
  },
  {
    id: '6',
    summary: [
      { label: 'AI Research Grants', value: '$500k', id: '20' },
      { label: 'Innovative Projects', value: '12', id: '21' },
      { label: 'Patents Filed', value: '9', id: '22' },
      { label: '2023 Goals', value: 'Breakthrough in AI', id: '23' },
    ],
    generalInformation:
      'AI Innovators is committed to driving progress in artificial intelligence by funding groundbreaking research and supporting innovative projects that have the potential to transform industries.',
    userTags: [UserTag.ai],
    goals: ['Advancing AI research', 'Supporting tech innovation', 'Fostering industry transformation'],
    company: {
      name: 'AI Innovators',
      location: 'Seattle, US',
      logo: 'https://via.placeholder.com/150/87cefa',
    },
    matching: 0.91,
    savedCount: '6k',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
  },
];

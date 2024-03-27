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
    matching: 84,
    savedCount: '7k',
    videoUrl: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  },
];

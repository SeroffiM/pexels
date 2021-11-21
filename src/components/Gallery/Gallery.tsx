import React from 'react';
import './Gallery.css';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { GalleryCard } from './GalleryCard/GalleryCard';

interface GalleryProps {
  photos: any[];
  loading: boolean;
  error: string | null;
}

export interface IPhotos {
  id: number;
  photographer: string;
  photographer_url: string;
  src: {
    large: string;
  };
}
export const Gallery: React.FC<GalleryProps> = ({
  photos,
  loading,
  error,
}: GalleryProps) => {
  console.log(photos);
  // const data = [
  //   {
  //     id: 9957305,
  //     width: 3024,
  //     height: 4032,
  //     url: 'https://www.pexels.com/photo/light-city-road-traffic-9957305/',
  //     photographer: 'Lina Sali',
  //     photographer_url: 'https://www.pexels.com/@linasali',
  //     photographer_id: 121962158,
  //     avg_color: '#363636',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/9957305/pexels-photo-9957305.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/9957305/pexels-photo-9957305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/9957305/pexels-photo-9957305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/9957305/pexels-photo-9957305.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/9957305/pexels-photo-9957305.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/9957305/pexels-photo-9957305.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/9957305/pexels-photo-9957305.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/9957305/pexels-photo-9957305.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10207815,
  //     width: 4024,
  //     height: 6048,
  //     url: 'https://www.pexels.com/photo/green-potted-plant-beside-blue-and-white-wooden-door-10207815/',
  //     photographer: 'Fotostudio -  All Eyes On You',
  //     photographer_url:
  //       'https://www.pexels.com/@fotostudio-all-eyes-on-you-134458509',
  //     photographer_id: 134458509,
  //     avg_color: '#7A9DB0',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10207815/pexels-photo-10207815.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10207815/pexels-photo-10207815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10207815/pexels-photo-10207815.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10207815/pexels-photo-10207815.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10207815/pexels-photo-10207815.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10207815/pexels-photo-10207815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10207815/pexels-photo-10207815.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10207815/pexels-photo-10207815.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10167623,
  //     width: 2848,
  //     height: 4288,
  //     url: 'https://www.pexels.com/photo/cookies-stacked-and-tied-with-thin-rope-10167623/',
  //     photographer: 'Юлия Чалова',
  //     photographer_url: 'https://www.pexels.com/@julia-chalova',
  //     photographer_id: 84329912,
  //     avg_color: '#564E4D',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10167623/pexels-photo-10167623.png',
  //       large2x:
  //         'https://images.pexels.com/photos/10167623/pexels-photo-10167623.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10167623/pexels-photo-10167623.png?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10167623/pexels-photo-10167623.png?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10167623/pexels-photo-10167623.png?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10167623/pexels-photo-10167623.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10167623/pexels-photo-10167623.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10167623/pexels-photo-10167623.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10166950,
  //     width: 2970,
  //     height: 3039,
  //     url: 'https://www.pexels.com/photo/flowers-against-sky-10166950/',
  //     photographer: 'Lisa',
  //     photographer_url: 'https://www.pexels.com/@fotios-photos',
  //     photographer_id: 26735,
  //     avg_color: '#A08490',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10166950/pexels-photo-10166950.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10166950/pexels-photo-10166950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10166950/pexels-photo-10166950.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10166950/pexels-photo-10166950.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10166950/pexels-photo-10166950.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10166950/pexels-photo-10166950.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10166950/pexels-photo-10166950.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10166950/pexels-photo-10166950.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10170490,
  //     width: 4000,
  //     height: 6000,
  //     url: 'https://www.pexels.com/photo/cookies-in-shape-of-leaves-and-recipe-book-10170490/',
  //     photographer: 'Юлия Чалова',
  //     photographer_url: 'https://www.pexels.com/@julia-chalova',
  //     photographer_id: 84329912,
  //     avg_color: '#756F63',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10170490/pexels-photo-10170490.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10170490/pexels-photo-10170490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10170490/pexels-photo-10170490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10170490/pexels-photo-10170490.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10170490/pexels-photo-10170490.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10170490/pexels-photo-10170490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10170490/pexels-photo-10170490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10170490/pexels-photo-10170490.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10163268,
  //     width: 3648,
  //     height: 5472,
  //     url: 'https://www.pexels.com/photo/woman-in-hat-standing-in-greenhouse-10163268/',
  //     photographer: 'Kasia Palitava',
  //     photographer_url: 'https://www.pexels.com/@kasia-palitava-132623147',
  //     photographer_id: 132623147,
  //     avg_color: '#7C8071',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10163268/pexels-photo-10163268.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10163268/pexels-photo-10163268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10163268/pexels-photo-10163268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10163268/pexels-photo-10163268.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10163268/pexels-photo-10163268.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10163268/pexels-photo-10163268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10163268/pexels-photo-10163268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10163268/pexels-photo-10163268.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10160799,
  //     width: 4480,
  //     height: 6720,
  //     url: 'https://www.pexels.com/photo/woman-in-sweater-standing-on-shore-hugging-self-10160799/',
  //     photographer: 'jasmin chew',
  //     photographer_url: 'https://www.pexels.com/@majesticaljasmin',
  //     photographer_id: 3315593,
  //     avg_color: '#95877A',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10160799/pexels-photo-10160799.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10160799/pexels-photo-10160799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10160799/pexels-photo-10160799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10160799/pexels-photo-10160799.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10160799/pexels-photo-10160799.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10160799/pexels-photo-10160799.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10160799/pexels-photo-10160799.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10160799/pexels-photo-10160799.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10156706,
  //     width: 3882,
  //     height: 5106,
  //     url: 'https://www.pexels.com/photo/aerial-photo-of-farmland-and-wasteland-in-autumn-colors-10156706/',
  //     photographer: 'jonathan emili',
  //     photographer_url: 'https://www.pexels.com/@jonathan-emili-4620668',
  //     photographer_id: 4620668,
  //     avg_color: '#767862',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10156706/pexels-photo-10156706.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10156706/pexels-photo-10156706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10156706/pexels-photo-10156706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10156706/pexels-photo-10156706.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10156706/pexels-photo-10156706.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10156706/pexels-photo-10156706.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10156706/pexels-photo-10156706.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10156706/pexels-photo-10156706.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10162708,
  //     width: 3024,
  //     height: 4032,
  //     url: 'https://www.pexels.com/photo/low-angle-view-of-scyscrapers-10162708/',
  //     photographer: 'Anna Kozlova',
  //     photographer_url: 'https://www.pexels.com/@anna-kozlova-132622441',
  //     photographer_id: 132622441,
  //     avg_color: '#757A80',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10162708/pexels-photo-10162708.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10162708/pexels-photo-10162708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10162708/pexels-photo-10162708.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10162708/pexels-photo-10162708.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10162708/pexels-photo-10162708.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10162708/pexels-photo-10162708.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10162708/pexels-photo-10162708.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10162708/pexels-photo-10162708.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10152077,
  //     width: 2170,
  //     height: 3256,
  //     url: 'https://www.pexels.com/photo/woman-arranging-a-flower-pot-10152077/',
  //     photographer: 'Polina  Kholodova',
  //     photographer_url: 'https://www.pexels.com/@polina-kholodova-124357393',
  //     photographer_id: 124357393,
  //     avg_color: '#7C856A',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10152077/pexels-photo-10152077.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10152077/pexels-photo-10152077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10152077/pexels-photo-10152077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10152077/pexels-photo-10152077.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10152077/pexels-photo-10152077.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10152077/pexels-photo-10152077.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10152077/pexels-photo-10152077.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10152077/pexels-photo-10152077.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10153223,
  //     width: 4000,
  //     height: 6000,
  //     url: 'https://www.pexels.com/photo/woman-taking-plants-from-the-ground-10153223/',
  //     photographer: 'Jefferson Lucena',
  //     photographer_url: 'https://www.pexels.com/@jefferson-lucena-1229262',
  //     photographer_id: 1229262,
  //     avg_color: '#505445',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10153223/pexels-photo-10153223.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10153223/pexels-photo-10153223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10153223/pexels-photo-10153223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10153223/pexels-photo-10153223.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10153223/pexels-photo-10153223.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10153223/pexels-photo-10153223.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10153223/pexels-photo-10153223.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10153223/pexels-photo-10153223.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10153596,
  //     width: 2000,
  //     height: 3016,
  //     url: 'https://www.pexels.com/photo/woman-with-curly-hair-in-bodysuit-bending-behind-curtain-10153596/',
  //     photographer: 'Yaroslava Borz',
  //     photographer_url: 'https://www.pexels.com/@yaroslava-borz-126286496',
  //     photographer_id: 126286496,
  //     avg_color: '#969696',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10153596/pexels-photo-10153596.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10153596/pexels-photo-10153596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10153596/pexels-photo-10153596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10153596/pexels-photo-10153596.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10153596/pexels-photo-10153596.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10153596/pexels-photo-10153596.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10153596/pexels-photo-10153596.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10153596/pexels-photo-10153596.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10157052,
  //     width: 2246,
  //     height: 3145,
  //     url: 'https://www.pexels.com/photo/view-of-aircraft-from-plane-window-10157052/',
  //     photographer: 'kira schwarz',
  //     photographer_url: 'https://www.pexels.com/@kira-schwarz',
  //     photographer_id: 616468,
  //     avg_color: '#373737',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10157052/pexels-photo-10157052.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10157052/pexels-photo-10157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10157052/pexels-photo-10157052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10157052/pexels-photo-10157052.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10157052/pexels-photo-10157052.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10157052/pexels-photo-10157052.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10157052/pexels-photo-10157052.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10157052/pexels-photo-10157052.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10157060,
  //     width: 3024,
  //     height: 4032,
  //     url: 'https://www.pexels.com/photo/hand-wearing-ring-and-wristwatch-in-front-of-plane-window-10157060/',
  //     photographer: 'kira schwarz',
  //     photographer_url: 'https://www.pexels.com/@kira-schwarz',
  //     photographer_id: 616468,
  //     avg_color: '#878586',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10157060/pexels-photo-10157060.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10157060/pexels-photo-10157060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10157060/pexels-photo-10157060.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10157060/pexels-photo-10157060.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10157060/pexels-photo-10157060.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10157060/pexels-photo-10157060.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10157060/pexels-photo-10157060.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10157060/pexels-photo-10157060.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10157062,
  //     width: 3024,
  //     height: 4032,
  //     url: 'https://www.pexels.com/photo/shadow-on-chipped-brick-wall-10157062/',
  //     photographer: 'kira schwarz',
  //     photographer_url: 'https://www.pexels.com/@kira-schwarz',
  //     photographer_id: 616468,
  //     avg_color: '#A79D91',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10157062/pexels-photo-10157062.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10157062/pexels-photo-10157062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10157062/pexels-photo-10157062.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10157062/pexels-photo-10157062.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10157062/pexels-photo-10157062.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10157062/pexels-photo-10157062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10157062/pexels-photo-10157062.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10157062/pexels-photo-10157062.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10163165,
  //     width: 3840,
  //     height: 5760,
  //     url: 'https://www.pexels.com/photo/grass-against-cloudy-sky-10163165/',
  //     photographer: 'Kasia Palitava',
  //     photographer_url: 'https://www.pexels.com/@kasia-palitava-132623147',
  //     photographer_id: 132623147,
  //     avg_color: '#AFB2A7',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10163165/pexels-photo-10163165.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10163165/pexels-photo-10163165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10163165/pexels-photo-10163165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10163165/pexels-photo-10163165.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10163165/pexels-photo-10163165.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10163165/pexels-photo-10163165.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10163165/pexels-photo-10163165.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10163165/pexels-photo-10163165.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 7224170,
  //     width: 1680,
  //     height: 2592,
  //     url: 'https://www.pexels.com/photo/grayscale-photo-of-concrete-building-7224170/',
  //     photographer: 'Simon Gough',
  //     photographer_url: 'https://www.pexels.com/@scgough',
  //     photographer_id: 1785348,
  //     avg_color: '#9294A8',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/7224170/pexels-photo-7224170.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/7224170/pexels-photo-7224170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/7224170/pexels-photo-7224170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/7224170/pexels-photo-7224170.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/7224170/pexels-photo-7224170.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/7224170/pexels-photo-7224170.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/7224170/pexels-photo-7224170.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/7224170/pexels-photo-7224170.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10189051,
  //     width: 2845,
  //     height: 4416,
  //     url: 'https://www.pexels.com/photo/aerial-view-of-green-and-brown-land-10189051/',
  //     photographer: 'Harun Güçlü',
  //     photographer_url: 'https://www.pexels.com/@harun-guclu-111611679',
  //     photographer_id: 111611679,
  //     avg_color: '#5A5B55',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10189051/pexels-photo-10189051.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10189051/pexels-photo-10189051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10189051/pexels-photo-10189051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10189051/pexels-photo-10189051.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10189051/pexels-photo-10189051.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10189051/pexels-photo-10189051.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10189051/pexels-photo-10189051.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10189051/pexels-photo-10189051.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 9752058,
  //     width: 2052,
  //     height: 3648,
  //     url: 'https://www.pexels.com/photo/sea-water-ocean-summer-9752058/',
  //     photographer: 'Katie Cerami',
  //     photographer_url: 'https://www.pexels.com/@katie-cerami-110690626',
  //     photographer_id: 110690626,
  //     avg_color: '#619FAC',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/9752058/pexels-photo-9752058.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/9752058/pexels-photo-9752058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/9752058/pexels-photo-9752058.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/9752058/pexels-photo-9752058.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/9752058/pexels-photo-9752058.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/9752058/pexels-photo-9752058.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/9752058/pexels-photo-9752058.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/9752058/pexels-photo-9752058.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  //   {
  //     id: 10107962,
  //     width: 2048,
  //     height: 2668,
  //     url: 'https://www.pexels.com/photo/black-and-white-fashion-people-woman-10107962/',
  //     photographer: 'Yaroslava Borz',
  //     photographer_url: 'https://www.pexels.com/@yaroslava-borz-126286496',
  //     photographer_id: 126286496,
  //     avg_color: '#787878',
  //     src: {
  //       original:
  //         'https://images.pexels.com/photos/10107962/pexels-photo-10107962.jpeg',
  //       large2x:
  //         'https://images.pexels.com/photos/10107962/pexels-photo-10107962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  //       large:
  //         'https://images.pexels.com/photos/10107962/pexels-photo-10107962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  //       medium:
  //         'https://images.pexels.com/photos/10107962/pexels-photo-10107962.jpeg?auto=compress&cs=tinysrgb&h=350',
  //       small:
  //         'https://images.pexels.com/photos/10107962/pexels-photo-10107962.jpeg?auto=compress&cs=tinysrgb&h=130',
  //       portrait:
  //         'https://images.pexels.com/photos/10107962/pexels-photo-10107962.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
  //       landscape:
  //         'https://images.pexels.com/photos/10107962/pexels-photo-10107962.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  //       tiny: 'https://images.pexels.com/photos/10107962/pexels-photo-10107962.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
  //     },
  //     liked: false,
  //   },
  // ];

  return (
    <div className="gallery-container">
      <ResponsiveMasonry columnsCountBreakPoints={{ 320: 2, 1077: 3, 1900: 4 }}>
        <Masonry gutter="1.65rem">
          {photos.map((photo, index) => {
            const { photographer, photographer_url, src, id }: IPhotos = photo;

            return (
              <GalleryCard
                id={id}
                photographer={photographer}
                photographer_url={photographer_url}
                src={src}
                key={index}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
      {loading ? (
        <div className="gallery-loader">
          <div className="gallery-loader__item"></div>
          <div className="gallery-loader__item"></div>
          <div className="gallery-loader__item"></div>
          <div className="gallery-loader__item"></div>
        </div>
      ) : null}
      {error ? <h2>Error</h2> : null}
    </div>
  );
};

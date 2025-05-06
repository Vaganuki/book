import {definePreset} from '@primeng/themes';
import Nora from '@primeng/themes/nora';

const MyPreset = definePreset(Nora, {
  semantic: {
    primary: {
      50: '{purple.50}',
      100: '{purple.100}',
      200: '{purple.200}',
      300: '{purple.300}',
      400: '{purple.400}',
      500: '{purple.500}',
      600: '{purple.600}',
      700: '{purple.700}',
      800: '{purple.800}',
      900: '{purple.900}',
      950: '{purple.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#D22FFF',
          inverseColor: '#FFF1FF',
          hoverColor: '#BD28B8',
          activeColor: '#A11EA0',
        },
        highlight: {
          background: '#ECD3F0',
          focusBackground: '#D8B4E2',
          color:'#2B0035',
          focusColor: '#2B0035',
        }
      },
      dark: {
        primary: {
          color: '#E961C6',
          inverseColor: '#0F0417',
          hoverColor: '#F180D4',
          activeColor: '#FF9CE4',
        },
        highlight: {
          background: 'rgba(233, 97, 198, 0.24)',
          focusBackground: 'rgba(233, 97, 198, 0.4)',
          color:'#F7CFFF',
          focusColor: '#FFF',
        }
      }
    }
    // focusRing: {
    //   width: '2px',
    //   style: 'dashed',
    //   color: '{primary.color}',
    //   offset: '1px'
    // }
  }
});

export default MyPreset;

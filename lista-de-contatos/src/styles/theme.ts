// src/styles/theme.ts
export const theme = {
    colors: {
      background: '#476177',
      primary: '#5a4dc7',     
      secondary: '#6b19d6',   
      accent: '#53c8ff',      
      text: '#c9c9c9',          
      textLight: '#ffffff',      
      danger: '#fd4d5b'       
    },
    fonts: {
      main: "'Roboto', sans-serif", 
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem'
    },
    spacing: (factor: number) => `${0.25 * factor}rem`, 
    borderRadius: '24px',
    breakpoints: {
      mobile: '480px',
      tablet: '768px',
      desktop: '1024px',
    }
  };
  
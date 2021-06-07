export const theme = {
  palette: {
    success: '#4caf50',
    error: '#F44336',
    warning: '#ff9800',
    darkGrays: ['#444', '#adadad', '#99a1ad', '#53565a', '#858585'],
    lightGrays: [
      '#f9f9f9',
      '#d6d6d6',
      '#f2f2f2',
      '#e0e0e0',
      '#eef0ed',
      '#ebebeb',
      '#ccc',
      '#f2f5f8',
      '#E7E7E7',
      '#f4f4f4',
      '#fafafa',
      '#f5f5f5',
    ],
    greens: ['#89D2A0'],
    purples: ['#9E788F', '#714955'],
    whites: ['#fff'],
    blacks: ['#1F1F1F', 'rgba(0, 0, 0, 0.5)', '#343a40', '#333'],
  },
  breakpoints: {
    // Bootstrap 4 breakpoints
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
}

export const breakPoints = (key: keyof typeof theme.breakpoints) =>
  `min-width: ${theme.breakpoints[key]}`

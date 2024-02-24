export const ButtonColorStyles = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-500 text-white',
  success: 'bg-green-500 text-white',
  danger: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-white',
  info: 'bg-blue-500 text-white',
  light: 'bg-gray-200 text-black',
  dark: 'bg-gray-800 text-white',
  link: 'bg-transparent text-blue-500',
} as const satisfies Record<string, string>;

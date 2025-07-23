export const setLanguagePreference = (language: string) => {
  // Cookie'yi 1 yıl boyunca sakla
  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 1);
  
  document.cookie = `preferred-language=${language}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Strict`;
};

export const getLanguagePreference = (): string | null => {
  if (typeof document === 'undefined') return null;
  
  const savedLanguage = document.cookie
    .split('; ')
    .find(row => row.startsWith('preferred-language='))
    ?.split('=')[1];
    
  return savedLanguage || null;
};

export const detectBrowserLanguage = (): 'tr' | 'en' => {
  if (typeof navigator === 'undefined') return 'en';
  
  const browserLanguage = navigator.language || navigator.languages?.[0] || 'en';
  const isTurkish = browserLanguage.toLowerCase().startsWith('tr') || 
                   browserLanguage.toLowerCase().includes('tr-');
  
  return isTurkish ? 'tr' : 'en';
}; 
export const storage = (key: string, data?: any) => {
  if (!data) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
  localStorage.setItem(key, JSON.stringify(data));
};

storage.remove = (key: string) => localStorage.removeItem(key);
storage.clear = () => localStorage.clear();

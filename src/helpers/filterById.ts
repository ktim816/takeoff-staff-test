export const filterById = (id: string) => {
  return (el: any) => el.id !== id;
};

export const updateDataById = (data: any[], {id, field, value}: DataOptions) => {
  const updatedData = [...data];
  for (let i in updatedData) {
    if (updatedData[i].id === id) {
      updatedData[i][field] = value;
      break;
    }
  }
  return updatedData;
};

interface DataOptions {
  id: string;
  field: string;
  value: string;
}

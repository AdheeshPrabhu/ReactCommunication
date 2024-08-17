export const getStoredData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const saveDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const addDataToLocalStorageArray = (key, newData) => {
  const existingData = getStoredData(key);
  existingData.push(newData);
  saveDataToLocalStorage(key, existingData);
};
export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

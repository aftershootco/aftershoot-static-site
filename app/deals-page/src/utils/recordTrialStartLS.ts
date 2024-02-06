export const addToLocalStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error adding to local storage:", error);
  }
};

// Function to check if a key is present in local storage
export const isKeyInLocalStorage = (key: string) => {
  try {
    const value = localStorage.getItem(key);
    return value !== null;
  } catch (error) {
    console.error("Error checking local storage:", error);
    return false;
  }
};

export const getFromLocalStorage = (key: string) => {
  try {
    const value = localStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error getting from local storage:", error);
    return null;
  }
};

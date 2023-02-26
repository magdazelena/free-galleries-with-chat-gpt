export function getStorageValue(key, defaultValue) {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export function setStorageValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

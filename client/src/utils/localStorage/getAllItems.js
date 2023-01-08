export function getAllItems() {
  return JSON.parse(localStorage.getItem("habitList"))
}
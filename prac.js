function searchList(list, q) {
  function searchCallback(item) {
    return (
      item.name.toLowerCase().includes(q.toLowerCase()) ||
      item.description.toLowerCase().includes(q.toLowerCase()) ||
      item.tags.find((tag) => tag.toLowerCase().includes(q.toLowerCase()))
    );
  }
  const filtered = list.filter(searchCallback);

  const sorted = filtered.sort((a, b) => a.distance > b.distance);
  return sorted;
}
console.log(searchList(hikes, "yellowstone"));
console.log(searchList(hikes, "moderate"));
console.log(searchList(hikes, "al"));

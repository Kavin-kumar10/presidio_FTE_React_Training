
// Custom hook for filtering and sorting
const useFilterSort = (items, searchTerm, sortOption) => {
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOption) {
        return filteredItems.sort((a, b) => a[sortOption].localeCompare(b[sortOption]));
    }
    return filteredItems;
};

export default useFilterSort
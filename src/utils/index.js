export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const groupTechStack = (techStack, categories) => {
    // Deduplicate based on ID to ensure uniqueness
    const uniqueStack = Array.from(new Map(techStack.map(item => [item.id, item])).values());

    // Group items by category
    const grouped = uniqueStack.reduce((acc, item) => {
        const category = item.category || 'other';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});

    // Return array of groups sorted by the categories order
    return categories.map(category => ({
        category,
        items: grouped[category] || []
    })).filter(group => group.items.length > 0);
};
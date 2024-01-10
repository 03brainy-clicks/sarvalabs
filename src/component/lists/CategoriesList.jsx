import List from "../../json/list.json";

const CategoriesList = () => {
  // Destructure the musicCategories array directly
  const { musicCategories: categoriesList } = List;

  return (
    <div className="text-xs text-textSecondary gap-1 h-full overflow-hidden overflow-y-auto">
      {categoriesList.map((category) => (
        // Use a fragment for the list items and add a unique key
        <div key={category.id} className="py-1 px-3 leading-[0.875rem] cursor-pointer rounded hover:bg-hover animate">
          {category.category}
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;

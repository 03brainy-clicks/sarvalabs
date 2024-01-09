import List from "../../json/list.json";

const CategoriesList = () => {
  const categoriesList = List.musicCategories;
  return (
    <div className="text-xs text-textSecondary gap-1 h-full overflow-hidden overflow-y-auto">
      {categoriesList.map((category) => {
        return (
          <div className="py-1 px-3 leading-[0.875rem]" key={category.id}>
            {category.category},
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;

import React from "react";

const Categories = () => {
  const Categories = [
    {
      id: 1,
      name: "All Items",
    },
    {
      id: 2,
      name: "Bird",
    },
    {
      id: 3,
      name: "Cat",
    },
    {
      id: 4,
      name: "Dog",
    },
    {
      id: 5,
      name: "Fish",
    },
  ];

  return (
    <div>
      <div className="container">
        <h2 className="text-center">Categories</h2>

        <div className="mt-5 d-flex flex-column">
          {Categories.map((category) => {
            return (
              category.id === 1 ? (
                <div className="p-2 m-1 bg-warning navbar-brand" key={category.id}>
                  {category.name}
                </div>
              ) : (
                <div className="p-2 m-1" key={category.id}>
                  {category.name}
                </div>
            ))
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;

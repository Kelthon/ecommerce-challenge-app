import React, { useEffect, useState } from 'react';
import './Categories.css';
import axios from 'axios';
import placeholder from './placeholder.jpg';
import ImageWithFallback from './ImageWithFallback';

type Category = {
  id: number;
  name: string;
  description: string;
  image_link: string;
};

function getListItemFromCategory(category: Category): JSX.Element {
  return (
    <li key={category.id} className="category-item">
      <p className="category-image">
        <ImageWithFallback 
        src={category.image_link}
        fallback={placeholder} alt={category.description} />
      </p>
      <p className="category-name">{category.name}</p>
    </li>
  );
}

export default function Categories(): JSX.Element {
  const [categories, setCategories] = useState<Category[] | null>(null);

  useEffect(() => {
    if (categories === null) {
      const fetchCategories = async () => {
        await axios
          .get<{page: Category[], count: number}>('http://localhost:3000/category/all?limit=3')
          .then((response) => {
            setCategories(response.data.page);
          });
      };
      fetchCategories();
    }
  }, [categories]);

  const categoriesList = categories?.map((category) =>
    getListItemFromCategory(category),
  );

  return (
    <section id="category-list">
      <h2 className="category-list-title">Browse The Range</h2>
      <ul className="categories">{categoriesList}</ul>
    </section>
  );
}

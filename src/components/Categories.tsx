import React, { useEffect, useState } from 'react';
import './Categories.css';
import axios from 'axios';
import placeholder from './placeholder.jpg';

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
        <img src={placeholder} alt={category.description} />
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
          .get<Category[]>('http://localhost:3000/category/all')
          .then((response) => {
            setCategories(response.data);
          });
      };
      fetchCategories();
    }
  }, []);

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

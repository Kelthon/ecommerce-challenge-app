import { useParams } from 'react-router-dom';
import FeatureBox from '../components/FeatureBox';
import FilterBar from '../components/FilterBar';
import PageCover from '../components/PageCover';
import Page from './Page';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Category } from '../components/Categories';

export default function CategoryPage(): JSX.Element {
  const { categoryId } = useParams();
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (category === null) {
        await axios
          .get<Category>(`http://localhost:3000/category/${categoryId}`)
          .then((response) => {
            setCategory(response.data);
          })
          .catch((e) => console.log(e));
      }
    };
    fetchData();
  }, [category, categoryId]);

  return (
    <>
      <Page>
        <PageCover
          title={category ? category.name : 'Category'}
          img="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTb0LvExQ2zTogghYDbTLwS0T3YvoV7KJgYYKAAlcn64vx1lJyu9KVLnFlBlkxArZ6h~wqkdYACccDQqFetqDGQucJuV0iIBanOobFyRb0Ct3acAXI80srQkdKw3i7zcq2cl83Uz~UCUSnp2wvIjKucvvafY7IsnN6xC~e1Y-opuFgWWIo~N5XoKos9EcbqORCsaM4givcYednJbdAahPFnfac4O0p7hHZMQ6U8fxlBWRGiGPvvrwebJyUVYx7fjqECWGR4m7-3KB5yT6miGgLCAJCdxHUNKZbWIwFkNvammznR8VBXn2Rms6dpwwjhvYsnKimXypjfqMUrsq9uNUA__"
        />
        <FilterBar />
        <FeatureBox />
      </Page>
    </>
  );
}

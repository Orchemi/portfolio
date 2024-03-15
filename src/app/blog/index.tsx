import { getAllPosts } from '@/libs/post';

export const getStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

interface IProps {
  posts: { slug: string }[];
}

export default function PostsPage({ posts }: IProps) {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>{post.slug}</li>
      ))}
    </ul>
  );
}

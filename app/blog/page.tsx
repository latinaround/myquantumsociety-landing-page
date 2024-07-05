import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

interface Props {
  params: {};
}
const BlogPage: NextPage<Props> = ({ params }) => {
  return (
    <main className="w-full">
      <div className="bg-green-700 min-h-80 flex justify-center items-center">
        <h1 className="sm:text-6xl text-4xl text-white font-bold">Blog</h1>
      </div>
      <div className="min-h-screen p-6">
        <div className="container mx-auto">Content goes here..</div>
      </div>
    </main>
  );
};

export default BlogPage;

import PostModel from "../../backend/models/PostModel";

export async function getStaticPaths() {
  // Return a list of possible value for slug
  const allPostData2 = await PostModel.find();
  const paths = allPostData2.map((post) => {
    return { params: { slug: post.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // Fetch necessary data for the blog post using params.slug
  const slug = context.params.slug;
  const myPost2 = await PostModel.find({ slug: slug });
  const myPost3 = JSON.stringify(myPost2);

  return {
    props: {
      post: myPost3,
    },
  };
}

export default function PostPage({ post }) {
  var myPost;
  try {
    myPost = JSON.parse(post);
  } catch (ex) {
    console.error(ex);
  }

  return (
    <div>
      <div>{myPost.title}</div>
      <div>This is a single post page</div>
    </div>
  );
}

// const allDataFromDB = [
//   {
//     _id: {
//       $oid: "61574570c0b4d1f1320e4fda",
//     },
//     title: "Post 3",
//     description: "post 3 desscription",
//     content: "post 3 content",
//     dateCreated: "1633109360907",
//     slug: "post-3",
//     __v: 0,
//   },
//   {
//     _id: {
//       $oid: "61574599c0b4d1f1320e4fdc",
//     },
//     title: "Post 2",
//     description: "post 2 desscription",
//     content: "post 2 content",
//     dateCreated: "1633109401741",
//     slug: "post-2",
//     __v: 0,
//   },
//   {
//     _id: {
//       $oid: "615745abc0b4d1f1320e4fde",
//     },
//     title: "Post 1",
//     description: "post 1 desscription",
//     content: "post 1 content",
//     dateCreated: "1633109419285",
//     slug: "post-1",
//     __v: 0,
//   },
// ];
// export async function getStaticPaths() {
//   // Return a list of possible value for slug
//   const allPostData2 = allDataFromDB;
//   const paths = allPostData2.map((post) => {
//     return { params: { slug: post.slug } };
//   });
//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const slug = context.params.slug;
//   const myPost2 = allDataFromDB.find((post) => post.slug === slug);

//   return {
//     props: {
//       post: myPost2,
//     },
//   };
// }

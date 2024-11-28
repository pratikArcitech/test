import { MdDelete } from "react-icons/md";

const Post = ({ post }) => {
  return (
    <div class="card post-card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">
          {post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {/* {post.reactions} */}
            <MdDelete />
          </span>
        </h5>
        <p class="card-text">{post.body}</p>
        {/* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */}
        {post.tags.map((tag) => (
          <span class="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div class="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
      </div>
    </div>
  );
};

export default Post;

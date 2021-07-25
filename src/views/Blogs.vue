<template>
  <div class="container">
    <img src="https://www.linkpicture.com/q/mainPic.png" class="mainPic" />
    <h1>
      A few words about this blog platform. Ghost, and how this site was made
    </h1>
    <span style="font-size: 1.3rem"
      >Why Ghost ($ Figma) instead of Medium, WordPress or other options?</span
    >
    <div class="blogs">
      <h3>All articles</h3>
      <div class="grid2">
        <div
          v-for="blog in blogs"
          :key="'blog-' + blog.id"
          class="blogContent"
          @click="$router.push('/blogs/' + blog.id)"
        >
          <img :src="blog.thumbnail" />
          <p>{{ blog.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blogs",
  data() {
    return {
      blogs: [
        {
          id: "1",
          title: "first blogs",
          thumbnail: "https://www.linkpicture.com/q/imageBlogs1.jpg",
        },
        {
          id: "2",
          title: "second blogs",
          thumbnail: "https://www.linkpicture.com/q/imageBlogs1.jpg",
        },
        {
          id: "3",
          title: "third blogs",
          thumbnail: "https://www.linkpicture.com/q/imageBlogs1.jpg",
        },
        {
          id: "4",
          title: "four blogs",
          thumbnail: "https://www.linkpicture.com/q/imageBlogs1.jpg",
        },
        {
          id: "5",
          title: "fifth blogs",
          thumbnail: "https://www.linkpicture.com/q/imageBlogs1.jpg",
        },
        {
          id: "6",
          title: "six blogs",
          thumbnail: "https://www.linkpicture.com/q/imageBlogs1.jpg",
        },
        {
          id: "7",
          title: "seven blogs",
          thumbnail: "https://www.linkpicture.com/q/imageBlogs1.jpg",
        },
        {
          id: "8",
          title: "eighth blogs",
          thumbnail: "https://www.linkpicture.com/q/imageBlogs1.jpg",
        },
        {
          id: "9",
          title: "nine blogs",
          thumbnail: "https://www.linkpicture.com/q/imageBlogs1.jpg",
        },
        {
          id: "10",
          title: "ten blogs",
          thumbnail: "https://www.linkpicture.com/q/imageBlogs1.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  .blogs {
    margin: 50px;
    border-top: 2px solid $black;
  }
  h1 {
    padding: 10px;
    margin: 0 auto;
    width: 80%;
    font-size: 3rem;
    font-weight: bold;
  }
  .mainPic {
    margin: 70px 0px;
  }
}
.blogs h3 {
  font-size: 2.5rem;
  font-weight: bold;
  transform: translate(0px, 50px);
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
.blogContent {
  img {
    width: 400px;
    height: 200px;
    margin: 70px 0px 10px 0px;
  }
}
</style>

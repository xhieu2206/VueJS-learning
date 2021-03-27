// https://vuejs.org/v2/guide/components.html

// https://jsonplaceholder.typicode.com/posts

Vue.component('button-counter', {
  data: function() {
    return {
      count: 0
    }
  },
  template: `<button
    v-on:click="count++"
  >You clicked me {{ count }} times</button>`
});

Vue.component('blog-post', {
  props: ['title'],
  template: `<h2 class="title">{{ title }}</h2>`
});

Vue.component('post-item', {
  props: ['post'],
  template: `
    <div class="post-item">
      <h5>{{ post.title }}</h5>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <button v-on:click="$emit('un-enlarge-text')">
        Un-enlarge text
      </button>
      <button v-on:click="$emit('select-post', post.id)">Select this post</button>
      <div v-html="post.body"></div>
    </div>
  `
});

var vm = new Vue({
  el: '#app',
  data: {
    title: 'Components Basics',
    postFontSize: 1,
    posts: [],
    selectedPostId: 0
  },
  created: async function() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      res.data.forEach(post => {
        this.posts.push(post);
      });
    } catch(err) {
      console.log('Could not reach posts API');
    }
  },
  methods: {
    selectId: function(id) {
      this.selectedPostId = id;
      alert('You have selected the post have has ID: ' + this.selectedPostId);
    },
    enlargeText: function() {
      this.postFontSize += 0.1;
    },
    unenlargeText: function() {
      if (this.postFontSize > 1) {
        this.postFontSize += -0.1;
      }
    }
  }
});

/*
  - data phải là một function, khi đó mỗi instance mới có thể maintain state của chính nó, nếu Vue không có rule này, click vào 1 button sẽ affect data của tất cả các instance, và thường chúng ta không muốn điều này xảy ra.
*/

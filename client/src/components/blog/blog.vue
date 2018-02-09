<template>
  <v-app>
    <v-container fluid>
      <v-layout row wrap v-for="blog in blogs" :key="blog.id">
        <v-flex xs12 sm12 md8 offset-md2 class="mb-5">
          <v-card>
            <v-layout>
              <v-flex xs12 sm12 md10 offset-md1>
                <v-card-title>
                  <h2 class="primary--text headline"><b>{{ blog.title }}</b></h2>                    
                </v-card-title>
                <v-card-text >
                  <p><b>{{ blog.updated_date }}</b></p>
                  <div><span class="">{{ blog.description }}</span></div>
                </v-card-text>
                <v-card-actions>
                  <v-btn flat class="primary" :to="'/blogs/' + blog._id + '/edit'">
                    <v-icon left light>arrow_back</v-icon>
                    Edit                    
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn flat class="primary" :to="'/blogs/' + blog._id">More
                    <v-icon right light>arrow_forward</v-icon>                    
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import BlogService from '@/services/BlogService'
export default {
  name: 'blog',
  data () {
    return {
      blogs: []
    }
  },
  mounted () {
    this.getBlogs()
  },
  methods: {
    async getBlogs () {
      const response = await BlogService.getBlogs()
      this.blogs = response.data
    },
    async deleteBlog (id) {
      await BlogService.deleteBlog(id)
      this.$router.push({ name: 'blog' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
  .headline {

    text-align: center;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

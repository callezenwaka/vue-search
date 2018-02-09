<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm10 offset-sm1 md10 offset-md2 class="mb-5">
          <v-card>
            <v-container fluid>
              <v-layout row>
                <v-flex xs12 sm12 md10 offset-md1>
                  <v-card-title>
                    <h2 class="primary--text headline"><b>{{ title }}</b></h2>                    
                  </v-card-title>
                  <v-card-text >
                    <p><b>{{ updated_date }}</b></p>
                    <div><span class="">{{ description }}</span></div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn flat class="primary" :to="'/'">
                      <v-icon left light>arrow_back</v-icon>
                      Back                    
                    </v-btn>
                    <v-spacer></v-spacer>
                    <template>
                      <v-dialog width="350px" persistent v-model="deleteDialog">
                        <v-btn 
                          flat
                          accent 
                          slot="activator"
                          class="primary">Delete
                        <v-icon right light>arrow_forward</v-icon>                   
                      </v-btn>
                        <v-card>
                          <v-container>
                            <v-layout row wrap>
                              <v-flex xs12>
                                <v-card-title>Delete Post</v-card-title>
                              </v-flex>
                            </v-layout>
                            <v-divider></v-divider>
                            <v-layout row wrap>
                              <v-flex xs12>
                                <v-card-text>
                                  <p>Are you sure you want to delete '{{ title }}'</p>
                                </v-card-text>
                              </v-flex>
                            </v-layout>
                            <v-divider></v-divider>
                            <v-layout row wrap>
                              <v-flex xs12>
                                <v-card-actions>
                                  <v-btn flat class="primary" @click.native="deleteDialog = false">
                                    <v-icon light left>block</v-icon>Decline
                                  </v-btn>
                                  <v-spacer></v-spacer>
                                  <v-btn 
                                    flat
                                    class="success"
                                    @click.native="deleteBlog($route.params.id)">Accept
                                    <v-icon light right>check_circle</v-icon>             
                                  </v-btn>
                                </v-card-actions>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-card>
                      </v-dialog>
                    </template>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import BlogService from '@/services/BlogService'
export default {
  props: ['id'],
  name: 'show',
  data () {
    return {
      deleteDialog: false,
      title: '',
      description: '',
      updated_date: ''
    }
  },
  mounted () {
    this.getSingleBlog()
  },
  computed: {
    onDeleteBlog () {
    }
  },
  methods: {
    async getSingleBlog () {
      const response = await BlogService.getSingleBlog({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.description = response.data.description
      this.updated_date = response.data.updated_date
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

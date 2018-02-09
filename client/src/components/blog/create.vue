<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4>Publish Post</h4>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <form enctype="multipart/form-data" @submit.prevent="onCreateBlog">
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="title"
                  label="Title"
                  id="title"
                  v-model="title"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="description"
                  label="Description"
                  id="description"
                  multi-line
                  v-model="description"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BlogService from '@/services/BlogService'
export default {
  name: 'create',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
        this.description !== ''
    }
  },
  methods: {
    async onCreateBlog () {
      if (!this.formIsValid) {
        return
      }
      await BlogService.createBlog({
        title: this.title,
        description: this.description
      })
      this.$router.push({name: 'blog'})
    }
  }
}
</script>

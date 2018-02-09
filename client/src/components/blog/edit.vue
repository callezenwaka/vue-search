<template>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm8 offset-sm2>
          <h4>Edit Post</h4>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <form @submit.prevent="onUpdateBlog">
              <v-layout row>
                <v-flex xs12 sm8 offset-sm2>
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
                <v-flex xs12 sm8 offset-sm2>
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
              <v-flex xs12 sm8 offset-sm2>
                <v-btn
                  class="primary"
                  :disabled="!formIsValid"
                  type="submit">Update Post</v-btn>
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
  name: 'edit',
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
  mounted () {
    this.getSingleBlog()
  },
  methods: {
    async getSingleBlog () {
      const response = await BlogService.getSingleBlog({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.description = response.data.description
    },
    async onUpdateBlog () {
      if (!this.formIsValid) {
        return
      }
      await BlogService.updateBlog({
        id: this.$route.params.id,
        title: this.title,
        description: this.description
      })
      this.$router.push({ name: 'blog' })
    }
  }
}
</script>

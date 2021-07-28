<template>
  <div class="forum">
    <form method="post" @submit.prevent="buttonNewPost" class="card forum">
    <div>
      <h2>Poster un message</h2>
      <div>
        <label for="title"></label>
        <input type="title" id="title" placeholder="Titre" v-model="title" />
      </div>
      <div>
        <label for="content"></label>
        <textarea type="text" id="content" placeholder="Votre post !" v-model="content"/>
      </div>
      <div class="input-group mb-3">
        <input type="file" class="form-control" id="inputGroupFileAddon03" ref="file" @change="selectFile()" />
      </div>

      <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="submit" @click.prevent="buttonNewPost" id="button-addon1">Envoyer</button>
      </div>
      <div class="error" v-if="error"> {{ error.error }} </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "newPost",
  data() {
    return {
      title: "",
      content: "",
      file: null,
      error: "",
    };
  },
  methods: {
    buttonNewPost() {
      let token = localStorage.getItem("token");
      const data = new FormData();
      if (this.file !== null) {
        data.append("title", this.title);
        data.append("content", this.content);
        data.append("image", this.file, this.file.name);
      } else {
        data.append("title", this.title);
        data.append("content", this.content);
      }
      axios
        .post("http://localhost:3000/api/posts/", data, {
          headers: { Authorization: "Bearer " + token },
        })
        .then(() => {
          alert("Votre message a bien été envoyé !");
          document.location.reload();
          this.$router.push("/forum");
        })
        .catch((error) => {
          this.error = error.response.data;
        });
    },
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style>

.forum
{
  max-width: 100%;
  width: 700px;
  margin-bottom: 20px;
  background:#A7A6A3;
  border-radius:20px;
}
.center
{
  display:flex;
  justify-content:center;
}

</style>
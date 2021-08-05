<template>
  <div>
    <form method="post" @submit.prevent="buttonNewComment">
      <div>
        <input type="text" aria-required="true" aria-label="écrivez votre commentaire"  id="comment" placeholder="Commentaire" v-model="comment"/>
      </div>
      <button type="submit" @click.prevent="buttonNewComment">Envoyer</button>
    </form>
    <div class="error" v-if="error">
      {{ error.error }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "newComment",
  props: { 
    id: { 
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      comment: "",
      error: "",
    };
  },
  methods: {
    buttonNewComment() {
      const data = {
        comment: this.comment,
      };
      let token = localStorage.getItem("token");
      axios
        .post(
          "http://localhost:3000/api/posts/" + this.id + "/comment/",
          data,
          {
            headers: { Authorization: "Bearer " + token },
          }
        )
        .then(() => {
          this.$router.push("/onePost/" + this.id);
          document.location.reload();
        })
        .catch((error) => {
          this.error = error.response.data;
        });
    },
  },
};
</script>

<style scoped>

input 
{
  border: solid #ecc16f 2px;
  text-decoration: none;
  margin-bottom: 20px;
  width: 52%;
}

button 
{
  background-color: #192a48;
  color: white;
  padding: 6px;
  margin-bottom: 10px;
  border: none;
  text-decoration: none;
}

.error 
{
  padding: 10px;
}
</style>
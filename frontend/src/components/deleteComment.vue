<template>
    <button type="submit" @click.prevent="deleteComment">X</button>
</template>


<script>
import axios from "axios";

export default {
  name: "deleteComment",
  props: {
    idComm: Number,
  },
  data() {
    return {
      token: "",
      isAdmin: "",
      id: this.$route.params.id,
    };
  },
  methods: {
    deleteComment() {
      let token = localStorage.getItem("token");
      axios
        .delete(
          "http://localhost:3000/api/posts/" +
            this.id +
            "/comment/" +
            this.idComm,
          {
            headers: { Authorization: "Bearer " + token },
          }
        )
        .then(() => {
          alert("Le commentaire a bien été supprimé !");
          document.location.reload();
        })
        .catch((error) => {
         ({ error });
        });
    },
  },
};
</script>

<style scoped>
button {
  background-color: #BE545B;
  color: white;
  border: none;
  padding: 5px;
  margin-top: 10px;
}
</style>
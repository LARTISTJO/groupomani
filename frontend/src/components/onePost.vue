<template>
  <div>
    <nav id="nav">  
      <router-link to="/forum">Retour</router-link>   
    </nav>
    <div id="onePost">
      <div id="comment-card" v-for="comment in allComments" :key="comment.id">
        <div class="content">
          {{ comment.User.pseudo }}
          <br />
          <strong>{{ comment.comment }}</strong><br />
          {{ moment(comment.createdAt).fromNow() }}
        </div>
        <div id="delete">
          <div v-if="comment.idUsers == userId">
            <deleteComment :idComm="comment.id" />
          </div>
          <div v-else-if="isAdmin == true">
            <deleteComment :idComm="comment.id" />
          </div>
        </div>
      </div>
    </div>
    <div class="commentaire">
      <newComment :id="id" />
    </div>
  </div>
</template>


<script>
let moment = require("moment");
import newComment from "./newComment";
import deleteComment from "./deleteComment";
let jwt = require("jsonwebtoken");

import axios from "axios";
export default {
  name: "onePost",
  components: {
    deleteComment,
    newComment,
  },
  data() {
    return {
      moment: moment,
      token: "",
      isAdmin: "",
      id: this.$route.params.id,
      userId: localStorage.getItem("id"),
      allComments: [],
    };
  },
  methods: {
    loadComments() {
      let token = localStorage.getItem("token");
      let decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
      axios
        .get("http://localhost:3000/api/posts/" + this.id + "/comments/", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
           this.isAdmin = decodedToken.isAdmin;
          this.allComments = res.data;
        })
        .catch((error) => {
          { error }
        });
    },
  },
  mounted() {
    this.loadComments();
  },
};
</script>

<style scoped>
#onePost 
{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}
#comment-card {
  background-color: #c46e78;
  color: white;
  font-size: 15px;
  width: 80%;
  border: solid 3px;
  border-radius:20px;
  margin-bottom: 15px;
  padding: 15px;
  text-align: left;
}
.pseudo
{
  font-size: 11px;
}
.date {
  font-size: 12px;
}
.comment {
  font-size: 20px;
}
.createdAt {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 15px;
}
.commentaire {
  margin: 15px;
}

#delete
{
  display:flex;
  justify-content:center;
}
</style>
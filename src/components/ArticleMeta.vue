<template>
  <div class="article-meta">
    <router-link
      :to="{ name: 'profile', parmas: { username: article.author.username } }"
    >
      <img :src="article.author.image" :alt="article.author.username" />
    </router-link>
    <div class="info">
      <router-link
        class="author"
        :to="{ name: 'profile', params: { username: article.author.username } }"
      >
        {{ article.author.username }}
      </router-link>
      <span class="date">{{ article.createdAt | date }}</span>
    </div>
    <button
      class="btn btn-sm pull-xs-right"
      @click="toggleFavorite"
      :class="{
        'btn-primary': article.favorited,
        'btn-outline-primary': !article.favorited,
      }"
    >
      <i class="ion-heart"></i>
      <span class="counter">{{ article.favoritesCount }}</span>
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FAVORITE_REMOVE, FAVORITE_ADD } from "../store/actions.type";
export default {
  name: "RwvArticleMeta",
  props: {
    article: {
      type: Object,
      required: true,
    },
    actions: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),
  },
  methods: {
    isCurrentUser() {
      if (this.currentUser.username && this.article.author.username) {
        return this.currentUser.username === this.article.author.username;
      }
      return false;
    },
    toggleFavorite() {
      if (!this.isAuthenticated) {
        this.$router.push({ name: "login" });
        return;
      }
      const action = this.article.favorited ? FAVORITE_REMOVE : FAVORITE_ADD;
      this.$store.dispatch(action, this.article.slug);
    },
  },
};
</script>

<style>
</style>
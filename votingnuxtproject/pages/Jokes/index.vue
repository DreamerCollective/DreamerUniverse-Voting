<template>
  <div>
    <SearchJokes v-on:search-text="searchText"/>
    <Joke v-for="joke in jokes" vbind:key="joke.id" :id="joke.id" :joke="joke.jokes"/>
  </div>
</template>


<script>
import axios from "axios";
import Joke from "../../components/Jokes.vue"
import SearchJokes from "~/components/SearchJokes";

export default {
  name: "about",
  components: {
    Joke,
    SearchJokes
  },
  data(){
    return{
      jokes: []
    };
  },
  async created()
  {
    const config = {
      headers: {
        Accept: "application/json"
      }
    }
    try{
      const res = await axios.get("https://icanhazdadjoke.com/search", config);
      this.jokes = res.data.result;
    }
    catch (err)
    {
      console.log(err);
    }

  },
  methods: {
    async searchText(text) {
      const config = {
        headers: {
          Accept: "application/json"
        }
      }
      try{
        const res = await axios.get(`https://icanhazdadjoke.com/search?term=${text}`, config);
        this.jokes = res.data.result;
      }
      catch (err)
      {
        console.log(err);
      }
    }
  },
  head() {
    return {
      title: "Welcome To Dad Jokes",
        meta: [
          {
            hid: "description",
            name: "description",
            content: "Best place for corny dad jokes"
          }
          ]
    };
  }
};
</script>

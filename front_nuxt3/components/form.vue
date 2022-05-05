<script setup>
    //http://localhost:4000/app1/graphql?query=query{authorList{name}}
    //http%3A%2F%2Flocalhost%3A4000%2Fapp1%2Fgraphql%3Fquery%3Dquery%7BauthorList%7Bname%7D%7D
    //let sid = '';
    //if (useCookie('PHPSESSID').value ?? false) {
    //  sid = useCookie('PHPSESSID').value;
    //  console.log(sid);
    //}
    const author_id = ref(false);
    const author_name = ref(false);
    const book_id = ref(false);
    const book_name = ref(true);
    var result = '確認中..';
    const sid = useCookie('PHPSESSID').value;
    console.log(sid);
    result = await useFetch('http://bff:4000/app1/graphql?query=query{authorList{id,name}}&sid=' + sid);
</script>

<template>
    <div>
    <h4>author</h4>
      <input type="checkbox" id="author_id" v-model="author_id">
      <label for="author_id">author_id: {{ author_id }}</label>
      <input type="checkbox" id="author_name" v-model="author_name">
      <label for="author_name">author_name: {{ author_name }}</label>
    <h4>book</h4>
      <input type="checkbox" id="book_id" v-model="book_id">
      <label for="book_id">book_id: {{ book_id }}</label>
      <input type="checkbox" id="book_name" v-model="book_name">
      <label for="book_name">book_name: {{ book_name }}</label>
    <h4>result</h4>
      {{result}}
  </div>
</template>
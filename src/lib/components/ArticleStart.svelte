<script>
  export let articles;
</script>

<div class="p-5">
  <h2># 文章</h2>
  <ol>
    {#each articles as article}
      <li><a href="/articles/{article.id}"><span class="h5">《{article.name}》</span> | {article.author}</a></li>
    {/each}
  </ol>
</div>

<style>
  h2 {
    color: green;
  }
  a {
    text-decoration: solid;
  }
</style>

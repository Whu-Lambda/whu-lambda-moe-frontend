<script>
  import {format_time} from '$lib/utils';
  import Markdown from '$lib/components/Markdown.svelte';

  export let article;
</script>

<div>
  <h1 class="text-center">{article.name}</h1>
  <p class="text-center py-3">
    <span><strong>作者：</strong> {article.author}</span> | <span><strong>时间：</strong>{format_time(article.created_at)}</span>
  </p>
  <div class="mb-5">
    <img class="cover" src={article.cover} alt="封面" />
  </div>
  <div>
    <Markdown content={article.content} />
  </div>
</div>

<style>
  .cover {
    max-width: 100%;
  }
</style>

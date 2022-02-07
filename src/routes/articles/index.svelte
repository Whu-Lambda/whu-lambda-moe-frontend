<script>
  import ArticleCard from '$lib/components/ArticleCard.svelte';
  import { anonymousPromise } from '$lib/utils/grpc';
  let articles;
  const load = async () => {
    const client = await anonymousPromise;
    const stream = client.getArticles({});
    stream.on('data', (arti) => {
      articles = articles.push(arti);
    });
  };
  load();
</script>

{#if articles}
  {#each articles as article, idx (idx)}
    <ArticleCard {article} />
  {/each}
{/if}

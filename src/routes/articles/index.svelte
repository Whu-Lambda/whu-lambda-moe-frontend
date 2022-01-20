<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('http://127.0.0.1:8000/articles/');
    const articles = await res.json();
    return {
      props: {
        articles
      }
    };
  };
</script>

<script>
  import ArticleCard from '$lib/components/ArticleCard.svelte';

  export let articles;
</script>

{#each articles as article, idx (idx)}
  <ArticleCard {article} />
{/each}

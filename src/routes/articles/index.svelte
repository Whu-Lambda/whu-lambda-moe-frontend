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

<h4>近期文章</h4>

{#each articles as article, idx (idx)}
  <ArticleCard {article} />
{/each}

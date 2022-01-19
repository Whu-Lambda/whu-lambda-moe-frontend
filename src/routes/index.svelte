<script context="module">
  export const load = async ({ fetch, session }) => {
    const articles_res = await fetch('http://127.0.0.1:8000/articles/');
    const articles = await articles_res.json();
    return {
      props: {
        articles
      }
    };
  };
</script>

<script>
  import Start from '$lib/components/Start.svelte';
  import ActivityStart from '$lib/components/ActivityStart.svelte';
  import ArticleStart from '$lib/components/ArticleStart.svelte';

  export let articles;
</script>

<Start />

<ActivityStart />

<ArticleStart {articles} />

<script context="module">
  export const load = async ({ fetch, params, session }) => {
    const article_id = params.article_id;
    const res = await fetch(`http://127.0.0.1:8000/articles/${article_id}/`);
    const article = await res.json();
    return {
      props: {
        article
      }
    };
  };
</script>

<script>
  import Article from '$lib/components/Article.svelte';

  export let article;
</script>

<Article {article} />

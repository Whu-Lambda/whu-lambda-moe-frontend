<script context="module">
  export const load = async ({ params }) => {
    const article_id = params.article_id;
    return {
      props: {
        article_id
      }
    };
  };
</script>

<script>
  import Article from '$lib/components/Article.svelte';
  import { anonymousPromise } from '$lib/utils/grpc';

  let article;

  const load = async () => {
    const client = await anonymousPromise;
    const call = client.getArticle(article_id);
    call.on('data', (arti) => {
      article = arti;
    });
  };
  load();
  export let article_id;
</script>

<Article {article} />

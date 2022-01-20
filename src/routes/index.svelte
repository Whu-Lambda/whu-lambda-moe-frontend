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
  import StartB from '$lib/components/StartB.svelte';
  import StartA from '$lib/components/StartA.svelte';
  import StartC from '$lib/components/StartC.svelte';
  import StartD from '$lib/components/StartD.svelte';
</script>

<Start />

<StartA />

<StartB />

<StartC />

<StartD />

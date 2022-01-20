<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('http://127.0.0.1:8000/activities/');
    const activities = await res.json();
    return {
      props: {
        activities
      }
    };
  };
</script>

<script>
  import ActivityCard from '$lib/components/ActivityCard.svelte';

  export let activities;
</script>

<div class="row justify-content-center">
  <div class="col-md-8">
    {#each activities as activity, idx (idx)}
      <ActivityCard {activity} />
    {/each}
  </div>
</div>

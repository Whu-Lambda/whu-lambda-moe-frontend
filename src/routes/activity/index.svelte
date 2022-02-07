<script>
  import ActivityCard from '$lib/components/ActivityCard.svelte';
  import { anonymousPromise } from '$lib/utils/grpc';
  let activities;
  const load = async () => {
    const client = await anonymousPromise;
    const stream = client.getActivities({});
    stream.on('data', (activity) => {
      activities = activities.push(activity);
    });
  };
  load();
</script>

{#if activities}
  {#each activities as activity, idx (idx)}
    <ActivityCard {activity} />
  {/each}
{/if}

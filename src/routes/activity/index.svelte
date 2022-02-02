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

<div class="row justify-content-center">
  <div class="col-md-8">
    {#each activities as activity, idx (idx)}
      <ActivityCard {activity} />
    {/each}
  </div>
</div>

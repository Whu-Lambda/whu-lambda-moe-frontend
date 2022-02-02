<script context="module">
  export const load = async ({ params }) => {
    const activity_id = params.activity_id;
    return {
      props: {
        activity_id
      }
    };
  };
</script>

<script>
  import Activity from '$lib/components/Activity.svelte';
  import { anonymousPromise } from '$lib/utils/grpc';

  let activity;

  const load = async () => {
    const client = await anonymousPromise;
    const call = client.getActivity(activity_id);
    call.on('data', (acti) => {
      activity = acti;
    });
  };
  load();
  export let activity_id;
</script>

<div class="row justify-content-center">
  <div class="col-md-8">
    <Activity {activity} />
  </div>
</div>

<script context="module">
  export const load = async ({ fetch, params }) => {
    const activity_id = params.activity_id;
    const res = await fetch(`http://127.0.0.1:8000/activities/${activity_id}/`);
    const activity = await res.json();
    return {
      props: {
        activity
      }
    };
  };
</script>

<script>
  import Activity from '$lib/components/Activity.svelte';

  export let activity;
</script>

<div class="row justify-content-center">
  <div class="col-md-8">
    <Activity {activity} />
  </div>
</div>

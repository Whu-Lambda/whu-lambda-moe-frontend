<script>
  import Markdown from '$lib/components/Markdown.svelte';
  export let activity;
</script>

<div>
  <h2 class="text-center">{activity.name}</h2>
  <div class="text-center my-3">
    <span><strong>时间: </strong>{activity.time_slot} </span>
    <span class="ms-3"><strong>地点:</strong> {activity.place}</span>
    <span class="badge rounded-pill bg-success"> {activity.status}</span>
  </div>
  <div>
    <Markdown content={activity.summary} />
    <Markdown content={activity.content} />
  </div>
</div>

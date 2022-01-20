<script>
  import Markdown from '$lib/components/Markdown.svelte';
  export let activity;
</script>

<div class="mb-5">
  <div>
    <a href="/activity/{activity.id}">
      <h4>{activity.name}</h4>
    </a>
  </div>
  <div>
    <span><strong>时间: </strong>{activity.time_slot} </span>
    <span><strong>地点:</strong> {activity.place}</span>
    <span class="badge rounded-pill bg-success"> {activity.status}</span>
    <br />
  </div>
  <div>
    <Markdown content={activity.summary} />
  </div>
</div>

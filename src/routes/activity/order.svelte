<!-- 活动预约 -->
<script>
  import { goto } from '$app/navigation';

  let name;
  let time_slot;
  let place;
  let summary;
  let content;

  function handleSave(e) {
    // save acivity here
  }

  function handleCancel(e) {
    if (confirm('确定要取消编辑吗？')) {
      goto('/activity');
    }
  }
</script>

<div>
  <h3 class="mb-5">我要预约</h3>
  <div class="mb-3">
    <label for="" class="form-label">活动名称</label>
    <input type="text" class="form-control" bind:value={name} />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">活动时间</label>
    <input type="text" class="form-control" bind:value={time_slot} placeholder="格式示例：2022-01-01 18:30-20:30" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">活动地点</label>
    <input type="text" class="form-control" bind:value={place} placeholder="格式示例：1区教三 403" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">活动简介</label>
    <textarea class="form-control" rows="3" bind:value={summary} placeholder="请输入活动摘要，支持 Markdown 语法。" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">活动详情</label>
    <textarea class="form-control" rows="20" bind:value={content} placeholder="请输入活动详情，支持 Markdown语法。" />
  </div>
  <button type="button" class="btn btn-primary" on:click={handleSave}>保存</button>
  <button type="button" class="btn btn-secondary" on:click={handleCancel}>取消</button>
</div>

<!-- 文章上传 -->
<script>
  import { goto } from '$app/navigation';

  let name;
  let about;
  let content;

  function handleSave(e) {
    // save article here
  }

  function handleCancel(e) {
    if (confirm('确定要取消编辑吗？')) {
      goto('/articles');
    }
  }
</script>

<div>
  <h3 class="mb-5">我要投稿</h3>
  <div class="mb-3">
    <label for="" class="form-label">文章标题</label>
    <input type="text" class="form-control" bind:value={name} />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">文章摘要</label>
    <textarea class="form-control" rows="3" bind:value={about} placeholder="请输入文章摘要，支持 Markdown 语法。" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">文章正文</label>
    <textarea class="form-control" rows="20" bind:value={content} placeholder="请输入文章正文，支持 Markdown语法。" />
  </div>
  <button type="button" class="btn btn-primary" on:click={handleSave}>保存</button>
  <button type="button" class="btn btn-secondary" on:click={handleCancel}>取消</button>
</div>

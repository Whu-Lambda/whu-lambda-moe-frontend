<script>
  let email = '';
  let password = '';

  function handleSubmit(e) {
    alert('功能还没实现');
  }
</script>

<div class="mt-3">
  <div class="mb-3">
    <label for="" class="form-label">邮箱</label>
    <input type="email" class="form-control" bind:value={email} />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">密码</label>
    <input type="password" class="form-control" bind:value={password} />
  </div>
  <button class="w-100 btn btn-lg btn-primary" on:click={handleSubmit}>登录</button>
</div>

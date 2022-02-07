<script>
  let email = '';
  let captcha = '';
  let password = '';
  let password2 = '';
  let timer = 0;

  function validateEmailDomain(email) {
    const allowedEmailDomains = ['qq.com', '163.com', 'gmail.com', 'sina.com', 'outlook.com'];
    try {
      let domain = email.split('@').at(-1);
      return allowedEmailDomains.includes(domain);
    } catch (error) {
      return false;
    }
  }

  function validatePasssword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  }

  function confirmPassword(password, password2) {
    return password.length > 0 && password === password2;
  }

  function handleSubmit(e) {
    if (!(validatePasssword(password) && confirmPassword(password, password2))) {
      alert('密码格式错误或密码不匹配！');
      return;
    }

    alert('功能未实现');
  }

  function sendCaptcha(e) {
    e.preventDefault();

    // validate emal
    if (!validateEmailDomain(email)) {
      alert('邮箱格式不支持');
      return;
    }

    // set timer
    timer = 60;
    const intervalId = setInterval(() => {
      if (timer > 0) {
        timer -= 1;
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    // send to sever
    alert('功能未实现');
  }
</script>

<div class="mt-3">
  <div class="mb-3">
    <label for="" class="form-label">邮箱</label>
    <input type="email" class="form-control" bind:value={email} />
  </div>
  <label for="" class="form-label">验证码</label>
  <div class="input-group mb-3">
    <input type="text" class="form-control" bind:value={captcha} />
    <button class="btn btn-outline-secondary" on:click={sendCaptcha} disabled={timer > 0}>
      {#if timer > 0} {timer}S后{/if}获取验证码
    </button>
  </div>
  <div class="mb-3">
    <label for="" class="form-label">密码</label>
    <input type="password" class="form-control" bind:value={password} />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">确认密码</label>
    <input type="password" class="form-control" bind:value={password2} class:is-valid={confirmPassword(password, password2)} />
  </div>
  <button class="w-100 btn btn-lg btn-primary" on:click={handleSubmit}>注册</button>
</div>

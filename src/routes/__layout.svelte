<div class="container-fluid sticky-footer-wrapper">
  <header class="d-flex flex-wrap justify-content-center align-items-center py-2 mb-4 border-bottom">
    <a href="/" class="me-auto">
      <img class="logo" src="/logo.png" alt="logo" />
    </a>

    <ul class="nav nav-pills">
      <li class="nav-item"><a href="/articles" class="nav-link">近期文章</a></li>
      <li class="nav-item"><a href="/activity" class="nav-link">活动预告</a></li>
      <li class="nav-item"><a href="/member" class="nav-link">加入我们</a></li>
    </ul>
  </header>

  <main class="page-body">
    <slot />
  </main>

  <footer class="page-footer">
    <hr />

    <div class="row">
      <div class="col-md-6 px-5">
        <h5>About Us</h5>
        <p>WHU-Lamda 最初由武汉大学喜欢 lambda 编程的同学组成，讨论的主题包括但不限于编程语言理论，自动推理，计算数学。</p>
      </div>
      <div class="col-md-6 px-5">
        <h5>Contact Us</h5>
        <ul>
          <li><a href="https://github.com/whu-lambda/"><i class="fa-brands fa-github" /> GitHub </a></li>
        </ul>
      </div>
    </div>

    <div class="d-flex flex-wrap justify-content-center my-3">
      <span> © 2022 whu-lambda.moe </span>
      <!-- <span class="ms-3">
        <a target="_blank" href="https://beian.miit.gov.cn/">鄂ICP备20210xxxxx号-1</a>
      </span> -->
    </div>
  </footer>
</div>

<style>
  /* Sticky footer(页脚沉底)
   * https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Sticky_footers
  */

  .sticky-footer-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .page-footer {
    flex-shrink: 0;
  }

  .page-body {
    flex-grow: 1;
  }
  /* end sticky footer */

  a {
    text-decoration: none;
  }

  .logo {
    height: 2rem;
  }
</style>

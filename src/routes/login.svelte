<script>
  import { TabContent, TabPane } from 'sveltestrap';
  import Register from '$lib/components/Register.svelte';
  import Login from '$lib/components/Login.svelte';
</script>

<div class="row justify-content-center">
  <div class="col-md-5 pb-5">
    <TabContent pills>
      <TabPane tabId="登录" tab="登录" active>
        <Login />
      </TabPane>
      <TabPane tabId="注册" tab="注册">
        <Register />
      </TabPane>
    </TabContent>
  </div>
</div>

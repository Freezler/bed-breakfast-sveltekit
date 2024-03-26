<script>
    export let title;
    export let content;
    export let actions;
</script>
<style>

    .box {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 0.25rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
</style>

<div class="box">
  <img src="https://picsum.photos/1600/900" alt="" width="1600" height="900" />
  <h1 class="title">{title}</h1>
  <div class="content">
    <p>{content}</p>
  </div>
  <div class="actions">
    <button class="button">Details</button>
    <button class="button">Buy</button>
  </div>
</div>
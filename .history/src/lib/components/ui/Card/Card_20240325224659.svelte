

<script lang="po">
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    gap: 2rem;
    padding: 2rem;
  }

  .box {
    overflow: hidden;
    grid-row: span 4;
    padding: 0;
    margin: 0 !important;

    @supports (grid-template-rows: subgrid) {
      display: grid;
      gap: 0;
      grid-template-rows: subgrid;
    }
    @supports not (grid-template-rows: subgrid) {
      display: flex;
      flex-direction: column;
      .content {
        flex: 1;
      }
    }

    .title {
      margin: 0;
      padding: 1rem;
      background: hsl(40, 50%, 90%);
    }
    .content {
      margin: 0;
      padding: 1rem;
      background: hsl(40, 50%, 93%);
    }
    .actions {
      padding: 1rem;
      background: hsl(40, 50%, 96%);
    }
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }
  }

  body {
    background: radial-gradient(circle at bottom right, #eee, #ccc);
    margin: 0;
    min-height: 100vh;
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
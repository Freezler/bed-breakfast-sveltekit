<img src="https://picsum.photos/1600/900" alt="" width="1600" height="900" />
  <h1 class="title">{title}</h1>
  <div class="content">
    <p>{content}</p>
  </div>
  <div class="actions">
    <button class="button">Details</button>
    <button class="button">Buy</button>
  </div>
  <style>
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
}
@supports (grid-template-rows: subgrid) {
  .box {
    display: grid;
    gap: 0;
    grid-template-rows: subgrid;
  }
}
@supports not (grid-template-rows: subgrid) {
  .box {
    display: flex;
    flex-direction: column;
  }
  .box .content {
    flex: 1;
  }
}
.box .title {
  margin: 0;
  padding: 1rem;
  background: #f2ead9;
}
.box .content {
  margin: 0;
  padding: 1rem;
  background: #f6f0e4;
}
.box .actions {
  padding: 1rem;
  background: #faf7f0;
}
.box img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

body {
  background: radial-gradient(circle at bottom right, #eee, #ccc);
  margin: 0;
  min-height: 100vh;
}
  </style>
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
    .card {
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      width: 100%;
      max-width: 40rem;
    }
    .title {
      text-align: center;
      color: #cf0056;
      padding: 1rem;
      margin: 0;
    }
    .content {
      padding: 1rem;
    }
    .actions {
      padding: 1rem;
      text-align: center;
    }
    .button {
      font: inherit;
      cursor: pointer;
      background-color: #cf0056;
      color: white;
      padding: 0.5rem 1.5rem;